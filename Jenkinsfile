pipeline {
    agent any

    environment {
        SONAR_TOKEN                   = credentials('sonarqube-token')
        SONAR_HOST_URL                = 'http://34.100.218.206:9000'
        GIT_CREDENTIAL_ID             = 'cloudseals-github'
        GOOGLE_APPLICATION_CREDENTIALS = credentials('gcp-key')
    }

    tools {
        nodejs 'NodeJS 20'
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: "${GIT_CREDENTIAL_ID}",
                    url: 'https://github.com/Naveenm04/cloudseals-app.git',
                    branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test & Coverage') {
            steps {
                sh 'npm test -- --coverage || true'
            }
        }

        stage('Initialize Sonar Project') {
            steps {
                // use --data to properly encode the space in "CloudSeals Frontend"
                sh """
                  curl -u ${SONAR_TOKEN}: \\
                       -X POST \"${SONAR_HOST_URL}/api/projects/create\" \\
                       --data \"project=cloudseals-frontend\" \\
                       --data \"name=CloudSeals Frontend\" \\
                       || true
                """
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarScanner') {
                    sh 'npm install -g sonar-scanner'
                    sh '''
                      sonar-scanner \
                        -Dsonar.projectKey=cloudseals-frontend \
                        -Dsonar.host.url=$SONAR_HOST_URL \
                        -Dsonar.token=$SONAR_TOKEN \
                        -Dsonar.sources=src \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                        -Dsonar.exclusions=**/*.test.js,**/node_modules/**
                    '''
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    script {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            error "Pipeline aborted due to quality gate failure: ${qg.status}"
                        }
                    }
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to GCP Bucket') {
            steps {
                sh 'gsutil -m rsync -r build gs://cloudseals-frontend-app'
            }
        }
    }

    post {
        always {
            slackSend channel: 'jenkins_mvp',
                      color: currentBuild.currentResult == 'SUCCESS' ? 'good' : 'danger',
                      message: "Frontend build ${currentBuild.currentResult}: ${env.BUILD_URL}"
        }
    }
}

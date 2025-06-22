pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('sonarqube-token')
        GIT_CREDENTIAL_ID = 'cloudseals-github'
        GOOGLE_APPLICATION_CREDENTIALS = credentials('gcp-key')
    }

    tools {
        nodejs 'NodeJS 20'
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: "${GIT_CREDENTIAL_ID}", url: 'https://github.com/Naveenm04/cloudseals-app.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test & Coverage') {
            steps {
                // Run unit tests and generate an LCOV report
                sh 'npm test -- --coverage'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarScanner') {
                    sh '''
                        /opt/sonar-scanner/bin/sonar-scanner \
                        -Dsonar.projectKey=frontend-pipeline \
                        -Dsonar.sources=src \
                        -Dsonar.tests=src \
                        -Dsonar.test.inclusions=src/**/*.spec.js \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                        -Dsonar.host.url=http://34.100.218.206:9000 \
                        -Dsonar.login=${SONAR_TOKEN}
                    '''
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    script {
                        sleep 20
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
                sh 'CI=false npm run build'
            }
        }

        stage('Post Build Actions') {
            parallel {
                stage('Archive Artifacts') {
                    steps {
                        archiveArtifacts artifacts: 'build/**', fingerprint: true
                    }
                }
                stage('Display Tree Structure') {
                    steps {
                        sh 'tree build'
                    }
                }
            }
        }

        stage('Deploy to GCP Bucket') {
            steps {
                withEnv(["GOOGLE_APPLICATION_CREDENTIALS=${GOOGLE_APPLICATION_CREDENTIALS}"]) {
                    sh '''
                        gcloud auth activate-service-account --key-file=$GOOGLE_APPLICATION_CREDENTIALS
                        gcloud config set project observability-459214
                        gsutil -m cp -r build/* gs://cloudseals-frontend-app
                    '''
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished. Check SonarQube for metrics and GCP bucket for deployment.'
        }
        success {
            script { notify('good') }
        }
        failure {
            script { notify('danger') }
        }
    }
}

def notify(colour) {
    slackSend color: colour, message: "Job ${env.JOB_NAME} Build #${env.BUILD_NUMBER} finished with status ${currentBuild.currentResult}"
}

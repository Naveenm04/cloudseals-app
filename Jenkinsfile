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
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarScanner') {
                    sh """
                        /opt/sonar-scanner/bin/sonar-scanner \
                        -Dsonar.projectKey=frontend-pipeline \
                        -Dsonar.sources=src \
                        -Dsonar.host.url=http://34.100.218.206:9000 \
                        -Dsonar.token=${SONAR_TOKEN}
                    """
                }
            }
        }

        stage('Build') {
            steps {
                sh 'CI=false npm run build'
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
        success {
            echo "✅ Frontend Build & Deployment Successful"
        }
        failure {
            echo "❌ Frontend Build Failed"
        }
    }
}

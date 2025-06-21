pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('SonarQube Token for cloudseals-frontend')
    }

    tools {
        nodejs 'NodeJS 20'
    }

    stages {

        stage('Checkout') {
            steps {
                git url: 'https://github.com/Naveenm04/cloudseals-frontend.git'
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
                        -Dsonar.token=$SONAR_TOKEN
                    """
                }
            }
        }

        stage('Build') {
            steps {
                sh 'CI=false npm run build'
            }
        }
    }

    post {
        failure {
            echo '❌ Pipeline failed.'
        }
        success {
            echo '✅ Pipeline completed successfully.'
        }
    }
}

pipeline {
    agent any

    tools {
        nodejs 'NodeJS 20'
    }

    environment {
        SONAR_TOKEN = credentials('SonarQube Token for cloudseals-frontend')
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'cloudseals-github',
                    url: 'https://github.com/Naveenm04/cloudseals-app.git'
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
    }

    post {
        success {
            echo '✅ Build and SonarQube analysis successful!'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}

pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('sonar-token')
    }

    tools {
        nodejs 'NodeJS 20'
    }

    stages {
        stage('Checkout Source') {
            steps {
                git credentialsId: 'cloudseals-github', url: 'https://github.com/Naveenm04/cloudseals-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        /opt/sonar-scanner/bin/sonar-scanner \
                        -Dsonar.projectKey=frontend-pipeline \
                        -Dsonar.sources=src \
                        -Dsonar.host.url=$SONAR_HOST_URL \
                        -Dsonar.login=$SONAR_TOKEN
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Build step here (e.g., npm run build)"'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully'


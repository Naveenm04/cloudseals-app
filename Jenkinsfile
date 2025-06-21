pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        SONAR_SCANNER_HOME = tool 'SonarScanner'
        SONAR_TOKEN = credentials('sonarqube-token')
    }

    stages {

        stage('Checkout Code') {
            steps {
                git credentialsId: 'cloudseals-github', url: 'https://github.com/Naveenm04/cloudseals-frontend.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withCredentials([string(credentialsId: 'sonarqube-token', variable: 'SONAR_TOKEN')]) {
                    sh "${SONAR_SCANNER_HOME}/bin/sonar-scanner " +
                        "-Dsonar.projectKey=frontend-pipeline " +
                        "-Dsonar.sources=src " +
                        "-Dsonar.host.url=http://34.100.218.206:9000 " +
                        "-Dsonar.token=$SONAR_TOKEN"
                }
            }
        }

        stage('Build Frontend') {
            steps {
                // Avoid treating warnings as errors
                sh 'CI=false npm run build'
            }
        }

        stage('Deploy (optional)') {
            when {
                expression { return false } // disable by default
            }
            steps {
                echo 'Deploy step goes here.'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check error log above.'
        }
    }
}

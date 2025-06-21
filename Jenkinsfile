pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        SONAR_TOKEN = credentials('sonarqube-token')
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Naveenm04/cloudseals-frontend.git', branch: 'main'
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
                    sh """
                        sonar-scanner \
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
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            slackSend(
                channel: '#jenkins_mvp',
                color: 'good',
                message: "✅ Build SUCCESS: Job ${env.JOB_NAME} [#${env.BUILD_NUMBER}] - ${env.BUILD_URL}"
            )
        }
        failure {
            slackSend(
                channel: '#jenkins_mvp',
                color: 'danger',
                message: "❌ Build FAILED: Job ${env.JOB_NAME} [#${env.BUILD_NUMBER}] - ${env.BUILD_URL}"
            )
        }
    }
}

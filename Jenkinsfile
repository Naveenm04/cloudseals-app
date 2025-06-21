pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Make sure "NodeJS" is configured in Jenkins Global Tools
    }

    environment {
        SONAR_TOKEN = credentials('sonarqube-token') // Secret Text credential ID
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
                withSonarQubeEnv('SonarQube') { // Jenkins SonarQube server name
                    sh '''
                        sonar-scanner \
                        -Dsonar.projectKey=frontend-pipeline \
                        -Dsonar.sources=src \
                        -Dsonar.host.url=http://34.100.218.206:9000 \
                        -Dsonar.token=$SONAR_TOKEN
                    '''
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
                message: "✅ Build SUCCESS: Job ${env.JOB_NAME} [#${env.BUILD_NUMBER}] - ${env.BUILD_URL}",
                tokenCredentialId: 'slack-channel-secret'
            )
        }
        failure {
            slackSend(
                channel: '#jenkins_mvp',
                color: 'danger',
                message: "❌ Build FAILED: Job ${env.JOB_NAME} [#${env.BUILD_NUMBER}] - ${env.BUILD_URL}",
                tokenCredentialId: 'slack-channel-secret'
            )
        }
    }
}

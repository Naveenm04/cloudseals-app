pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('sonarqube-token') // Credential ID for SonarQube
        GIT_CREDENTIAL_ID = 'cloudseals-github' // GitHub PAT credential ID
    }

    tools {
        nodejs 'NodeJS 20' // Make sure this matches Jenkins tool name exactly
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
                    sh "/opt/sonar-scanner/bin/sonar-scanner " +
                       "-Dsonar.projectKey=frontend-pipeline " +
                       "-Dsonar.sources=src " +
                       "-Dsonar.host.url=http://34.100.218.206:9000 " +
                       "-Dsonar.token=$SONAR_TOKEN"
                }
            }
        }

        stage('Build') {
            steps {
                // Ignore eslint warnings to prevent CI break
                sh 'CI=false npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline succeeded.'
            slackSend (
                channel: 'jenkins_mvp',
                color: 'good',
                message: "*Success:* `frontend-pipeline` completed successfully! ✅"
            )
        }
        failure {
            echo '❌ Pipeline failed.'
            slackSend (
                channel: 'jenkins_mvp',
                color: 'danger',
                message: "*Failure:* `frontend-pipeline` failed. ❌"
            )
        }
    }
}

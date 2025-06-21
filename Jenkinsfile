pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('SonarQube Token for cloudseals-frontend')
        GITHUB_CREDENTIALS = credentials('cloudseals-github')
    }

    tools {
        nodejs 'NodeJS 20'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Naveenm04/cloudseals-frontend.git', credentialsId: "${GITHUB_CREDENTIALS}"
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
                // Disable CI strict mode for eslint
                sh 'CI=false npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully.'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}

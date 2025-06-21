pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('sonarqube-token')
    }

    tools {
        nodejs 'NodeJS 20'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Naveenm04/cloudseals-app.git', branch: 'main', credentialsId: 'cloudseals-github'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            environment {
                PATH = "${tool 'NodeJS 20'}/bin:${env.PATH}"
            }
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
                // CI=false disables treating warnings as errors in React builds
                sh 'CI=false npm run build'
            }
        }
    }

    post {
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}

pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        SONAR_SCANNER_HOME = tool 'SonarScanner'
    }

    tools {
        nodejs 'Node18'
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Naveenm04/cloudseals-frontend.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            environment {
                SONAR_TOKEN = credentials('sonarqube-token')
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh """
                    ${env.SONAR_SCANNER_HOME}/bin/sonar-scanner \
                      -Dsonar.projectKey=cloudseals-frontend \
                      -Dsonar.sources=src \
                      -Dsonar.host.url=http://34.100.218.206:9000 \
                      -Dsonar.login=$SONAR_TOKEN
                    """
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sshagent (credentials: ['cis-frontend-ssh-key']) {
                    sh 'scp -r build/* ubuntu@34.47.236.22:/var/www/cloudseals-app/'
                }
            }
        }
    }

    post {
        success {
            echo 'Frontend analyzed and deployed!'
        }
    }
}

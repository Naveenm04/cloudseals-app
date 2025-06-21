pipeline {
    agent any

    environment {
        SONARQUBE = 'SonarQube'
        SONAR_SCANNER = tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
    }

    tools {
        nodejs 'NodeJS'  // Ensure you have a NodeJS tool configured with this name
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
                    withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
                        sh "${SONAR_SCANNER}/bin/sonar-scanner -Dsonar.projectKey=frontend-pipeline -Dsonar.sources=src -Dsonar.host.url=http://34.100.218.206:9000 -Dsonar.token=$SONAR_TOKEN"
                    }
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
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}

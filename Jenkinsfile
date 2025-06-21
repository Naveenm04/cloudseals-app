pipeline {
    agent any

    environment {
        SONARQUBE = 'SonarQube'
        SONAR_SCANNER = tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
    }

    tools {
        nodejs 'NodeJS' // make sure you have a NodeJS tool named exactly 'NodeJS' in Jenkins Tools config
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
                    sh "${SONAR_SCANNER}/bin/sonar-scanner -Dsonar.projectKey=frontend-pipeline -Dsonar.sources=src -Dsonar.host.url=http://34.100.218.206:9000 -Dsonar.token=$SONAR_TOKEN"
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

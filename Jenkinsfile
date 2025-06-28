pipeline {
  agent any
  tools { nodejs 'NodeJS 20' }
  environment { GIT_CREDENTIAL_ID = 'cloudseals-github-ssh' }

  stages {
    stage('Checkout & Build') {
      steps {
        git credentialsId: "${env.GIT_CREDENTIAL_ID}",
            url: 'git@github.com:Naveenm04/cloudseals-app.git',
            branch: 'main'
        sh 'npm install'
        sh 'CI=false npm run build'
      }
    }
    stage('Serve UI') {
      steps {
        sh 'npm install -g serve'
        sh 'nohup serve -s build -l 3000 > serve.log 2>&1 &'
      }
    }
  }
}

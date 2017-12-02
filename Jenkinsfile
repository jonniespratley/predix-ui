pipeline {
  agent {
    any
  }
  stages {
    stage('System Info') {
      steps {
        echo 'Running ${env.BUILD_ID} on ${env.JENKINS_URL}'
        sh 'node --version'
        sh 'npm --version'
      }
    }
    stage('Build') {
      steps {
          echo 'Building..'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }
}

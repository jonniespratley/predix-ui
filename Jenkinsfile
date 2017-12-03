/*
pipeline
*/
pipeline {
  agent any
	environment {
		DEBUG = '*'
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
        echo 'Building...'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
    stage('Package') {
      steps {
        echo 'Packaging...'
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying...'
      }
    }
  }
	post {
    always {
			echo 'Done.'
			//junit 'coverage/*.xml'
    }
  }
}

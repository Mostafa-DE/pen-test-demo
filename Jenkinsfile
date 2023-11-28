pipeline {
  agent any
  stages {
    stage('checkout Code') {
      steps {
        git(url: 'https://github.com/Mostafa-DE/pen-test-demo', branch: 'develop')
      }
    }

    stage('Shell') {
      steps {
        sh 'ls -la && echo "Mostafa-DE"'
      }
    }

  }
}
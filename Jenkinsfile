pipeline {
  agent any

  stages {
    stage('build and test') {
      steps {
        sh "npx cypress run"
      }
    }
  }
}
pipeline {
  agent{
    docker {
      image 'cypress/base:10'
    }
  }

  stages {
    stage('Cypress run') {
      steps {
        sh "npx cypress run"
      }
    }
  }

}
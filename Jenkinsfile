pipeline {
  agent any

  stages {
    stage('Checkout git') {
      steps {
        eco "Checked out git repository."
     
      }
    }
    stage('Execute Cypress') {
      steps {
        eco "Start cypress..."
        sh "npx cypress info"
      }
    }
  }

}
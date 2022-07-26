pipeline {
  agent any

  stages {
    stage('Checkout git') {
      steps {
        echo "Checked out git repository."
     
      }
    }
    stage('Execute Cypress') {
      steps {
        echo "Start cypress..."
        sh "npx cypress run"
      }
    }

    stage('Generate Reports') {
      steps {
        echo "Generating report"
        
      }
    }
  }

}
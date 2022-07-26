pipeline {
  agent any

  options{
    ansiColor('xterm')
  }

  stages {
    stage('Checkout git') {
      steps {
        echo "Checked out git repository."
     
      }
    }
    stage('Execute Cypress') {
      steps {
        echo "Start cypress..."
        sh "npx cypress run --headless"
      }
    }

    stage('Generate Reports') {
      steps {
        echo "Generating report"
        
      }
    }
  }

}
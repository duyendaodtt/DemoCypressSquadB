pipeline {
  agent any

  stages {
    stage('Initialize') {
      steps {
        echo "Checked out git repository."
        sh "npm i"
      }
    }
    stage('Running') {
      steps {
        echo "Start cypress..."
        sh "npx cypress run"
      }
    }

    stage('Generate Reports') {
      steps {
        echo "Generating report"
        sh "node cypress/cucumber-json/cucumber-html-report.js"
      }
    }
  }

}
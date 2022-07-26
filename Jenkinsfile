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
        sh "publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: '/var/lib/jenkins/workspace/Cypress Pipline/reports/', reportFiles: 'cucumber-htmlreport.html', reportName: 'HTML Report', reportTitles: ''])"
      }
    }
  }

}
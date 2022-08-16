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
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: '/var/lib/jenkins/workspace/Cypress Pipline/reports/cucumber-htmlreport.html/', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }

  }

  post { 
        always { 
            emailext( attachLog: true, body: "Please visit ${env.BUILD_URL} for further information", subject: "Job '${env.JOB_NAME}' (${env.BUILD_NUMBER})", to: "ha.hoang@xpondigital.com")
        }
    }
}
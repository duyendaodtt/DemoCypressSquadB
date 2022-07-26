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
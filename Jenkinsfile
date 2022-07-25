pipeline {
    
    agent {
        docker {
            image 'node:16.13.1-alpine'
            args '-p 3000:3000'
        }
    }

    stages {

        stage("build") {

            steps {
                sh 'npm --version'
                sh 'npm install'
            }
        }
    }
    // post {
    //     always {
    //         echo "this will always show"
    //     }
    //     failure {
    //         echo "one stage failed"
    //     }
    //     success {
    //         "all stages succeeded"
    //     }
    // }
}

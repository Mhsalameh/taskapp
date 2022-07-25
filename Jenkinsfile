pipeline {
    
       
    agent {
        docker {
            image 'node:16-alpine'
            args '-p 3000:3000'
        }
    }


    stages {
        stage("tooling"){
            steps {
                sh 'node --version'
            }
        }
        stage("build") {

            steps {
                echo "building stage"
                echo "webhooks good"
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

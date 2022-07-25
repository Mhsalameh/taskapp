pipeline {
    
       
    agent {
        docker {
            image 'node:16-alpine'
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

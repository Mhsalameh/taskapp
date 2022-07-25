pipeline {
    
    agent any

    stages {

        stage("build") {

            steps {
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

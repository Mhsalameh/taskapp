pipeline {

    agent {
        docker {
            image "node:16-alpine"
        }
    }

    stages {
        stage("tooling"){
            steps {
                sh 'docker version'
            }
        }
        stage("build") {

            steps {
                echo "building stage"
                echo "webhooks good"
            }
        }
    }
}

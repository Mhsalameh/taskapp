pipeline {

    agent any

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

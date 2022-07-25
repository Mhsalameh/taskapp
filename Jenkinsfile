pipeline {

   agent {
    docker {
        image 'node:16-alpine'
        args '-p 3000:3000'
    }
   }

    stages {
        stage("build") {

            steps {
                echo "building stage"
                echo "webhooks good"
            }
        }
    }
}

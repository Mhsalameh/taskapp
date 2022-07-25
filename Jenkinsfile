pipeline {

   agent any

    stages {
        stage("build") {

            steps {
                echo "building app..."
                nodejs('node'){
                    sh 'npm install'
                }
            }
        }
    }
}

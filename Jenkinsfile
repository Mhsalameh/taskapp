pipeline {

   agent any

    stages {
        stage("build") {

            steps {
                echo "building app..."
                nodejs('node'){
                    sh '''
                    cd webapp
                    npm install
                    '''
                }
            }
        }
        stage ('testing'){
            steps{
                echo "testing app"
            }
        }
        stage ('deploying'){
            steps{
                echo "deploying app"
            }
        }
    }
}

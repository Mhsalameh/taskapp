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
        stage ('run'){
            steps{
                echo "running the app"
                nodejs('node'){
                    sh 'npm ./webapp/src/server.js'
                }
            }
        }
    }
}

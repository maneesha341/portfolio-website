pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps { git branch: 'main', url: 'https://github.com/maneesha341/portfolio-website.git' }
        }
        stage('Build') {
            steps { bat 'npm install' }
        }
        stage('Test') {
            steps { bat 'npm test' }
        }
        stage('Docker Build & Push') {
            steps {
                bat 'docker build -t yourrepo/portfolio-website:%BUILD_NUMBER% .'
                bat 'docker push yourrepo/portfolio-website:%BUILD_NUMBER%'
            }
        }
        stage('K8s Deploy') {
            steps {
                bat 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }
}

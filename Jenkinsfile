pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps { git branch: 'main', url: 'https://github.com/maneesha341/portfolio-website.git' }
        }
        stage('Build') {
            steps { sh 'npm install' }
        }
        stage('Test') {
            steps { sh 'npm test' }
        }
        stage('Docker Build & Push') {
            steps {
                sh 'docker build -t yourrepo/portfolio-website:$BUILD_NUMBER .'
                sh 'docker push yourrepo/portfolio-website:$BUILD_NUMBER'
            }
        }
        stage('K8s Deploy') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }
}

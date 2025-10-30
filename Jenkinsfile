pipeline {
    agent any

    tools {
        nodejs 'Node_22'
    }

    stages {
        stage('Build') {
            steps {
                bat 'node -v'
                bat 'npm -v'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }

        stage('Docker Build & Push') {
            steps {
                bat 'docker build -t my-portfolio:latest .'
                bat 'docker images'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f k8s-deployment.yaml'
            }
        }
    }
}

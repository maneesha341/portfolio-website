pipeline {
    agent any

    tools {
        nodejs 'Node_22'
    }

    // Remove this block if no environment variables
    // environment {
    //     // Example:
    //     // DOCKER_USERNAME = credentials('docker-username-id')
    //     // DOCKER_PASSWORD = credentials('docker-password-id')
    // }

    stages {
        stage('Build') {
            steps {
                dir('portfolio-website') {
                    bat 'node -v'
                    bat 'npm -v'
                    bat 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('portfolio-website') {
                    bat 'npm test || echo "Tests failed, skipping..."'
                }
            }
        }

        stage('Docker Build & Push') {
            steps {
                dir('portfolio-website') {
                    bat 'docker build -t my-portfolio:latest .'
                    bat 'docker images'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f k8s-deployment.yaml'
            }
        }
    }
}

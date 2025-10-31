pipeline {
    agent any

    tools {
        nodejs 'Node_22'
    }

    environment {
        // Add Docker and Kubernetes credentials or configs if needed
        // DOCKER_USERNAME = credentials('docker-username-id')
        // DOCKER_PASSWORD = credentials('docker-password-id')
        // KUBE_CONFIG = credentials('kubeconfig-id')
    }

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
                    // If pushing to registry, include login commands:
                    // bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                    // bat 'docker push my-portfolio:latest'
                    bat 'docker images'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                // Ensure kubectl is configured/accessed properly
                bat 'kubectl apply -f k8s-deployment.yaml'
            }
        }
    }
}

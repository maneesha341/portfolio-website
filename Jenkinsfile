pipeline {
    agent any

    stages {
        stage('Build Backend') {
            steps {
                dir('backend/demo') {
                    bat './mvnw.cmd clean package'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Static frontend: No build commands needed.'
            }
        }

        stage('Docker Build Backend') {
            steps {
                dir('backend/demo') {
                    bat 'docker build -t my-backend:latest .'
                }
            }
        }

        stage('Docker Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'docker build -t my-frontend:latest .'
                }
            }
        }

        stage('Deploy Backend to Kubernetes') {
            steps {
                bat 'kubectl apply -f backend/demo/k8s-backend.yaml'
            }
        }

        stage('Deploy Frontend to Kubernetes') {
            steps {
                bat 'kubectl apply -f frontend/k8s-frontend.yaml'
            }
        }
    }
}

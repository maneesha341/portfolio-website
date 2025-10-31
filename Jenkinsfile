pipeline {
    agent any

    tools {
        maven 'Maven_3.8.8' // Use your Maven tool name in Jenkins, or remove if not using Jenkins tools config
    }

    stages {
        stage('Build Backend') {
            steps {
                dir('backend/demo') {
                    bat './mvnw.cmd clean package' // Windows agent: use .cmd if present
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
                    bat 'docker build -t my-backend:latest .' // Make sure there is a Dockerfile in backend/demo
                }
            }
        }

        stage('Docker Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'docker build -t my-frontend:latest .' // Make sure there is a Dockerfile in frontend
                }
            }
        }

        stage('Deploy Backend to Kubernetes') {
            steps {
                // Change filename/path if your YAML is different
                bat 'kubectl apply -f backend/demo/k8s-backend.yaml'
            }
        }

        stage('Deploy Frontend to Kubernetes') {
            steps {
                // Change filename/path if your YAML is different
                bat 'kubectl apply -f frontend/k8s-frontend.yaml'
            }
        }
    }
}

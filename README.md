\# Portfolio Website Deployment Guide



\## Prerequisites

\- Docker installed and running

\- Minikube installed and running

\- Maven installed (for Java backend)



\## Docker Build \& Push Steps

mvn clean package

docker build -t suryakal/portfolio:latest .

docker login

docker push suryakal/portfolio:latest



\## Kubernetes Deployment \& Service

kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

kubectl get pods

kubectl get deployments

kubectl get services



\## Access the App via Minikube

minikube service portfolio-service

\# (Opens the app in your browser—test all endpoints!)



\## Additional Notes

kubectl describe pod <pod-name>

kubectl logs <pod-name>



\## Team Handoff

git add Dockerfile deployment.yaml service.yaml README.md

git commit -m "Document deployment and service setup"

git push origin main




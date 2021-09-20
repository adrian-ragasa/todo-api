## Start the project
The project is started with the regular npm commands.

1. Run `npm install` to install all dependencies.
2. Run `npm run dev` to start the development environment.

If your service is up and running:
* Go to [http://localhost:8080/todos](http://localhost:8080/todos).

## DB

Out of the box this service is working with a staging Mongo DB instance so you do not need to configure nothing but if you would like to work with your local or another instance, update it through an environment variable.

`env MONGO_DB_URI=Your_Mongo_DB_URI`


## CI/CD

* Continuous integration and continuous delivery is done by [GitHub Action Workflow](https://docs.github.com/en/actions) and  [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/).

* Continuous deployment is working through [Amazon Elastic Kubernetes Service](https://aws.amazon.com/eks/).
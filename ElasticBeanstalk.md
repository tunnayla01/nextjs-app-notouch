Sure, here is the guide in Markdown format:

# AWS Elastic Beanstalk Lab with a Simple Node.js App

## Step 1: Clone the Repository

### Install node dependencies

```bash
npm install
npm run build
zip -r nextjs-app.zip ./ -x "node_modules/*" ".git/*"  
```


## Step 2: Set Up AWS Elastic Beanstalk

### Install the AWS Elastic Beanstalk CLI

Follow the instructions [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html) to install the Elastic Beanstalk CLI.

### Initialize Your Elastic Beanstalk Application

```bash
eb init
```

- Follow the prompts to set up your application. Select your region, application name, and platform (Node.js).

### Create an Elastic Beanstalk Environment

```bash
eb create --single
```

- Follow the prompts to set up your environment. This will create and deploy your application to Elastic Beanstalk.

### Deploy Your Application

```bash
eb deploy
```

This command packages your application and deploys it to the environment you created.

## Step 3: Verify Your Deployment

Once the deployment is complete, you can find the URL for your application by running:

```bash
eb status
```

Open the provided URL in your browser to see your Node.js application running on AWS Elastic Beanstalk.

## Step 4: Clean Up

To avoid incurring charges, you can terminate the environment and delete the application when you're done:

```bash
eb terminate
eb delete
```

This will delete the Elastic Beanstalk environment and the application.


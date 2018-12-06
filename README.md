# geckos-project-24
Chingu Voyage Project

## A Chatbot that gives you the news of your choice.

## Our Team
[1. Desmond Beramendi - Team lead] (https://github.com/desmondbera)

[2. Ahmed Sallam Nassar Awad] (https://github.com/ahmed-sallam)

[3. Foteini Kollia] (https://github.com/FoteiniK)

## Setting up Backend w/ Serverless Framework + AWS

1. Install Serverless. Follow these instructions. Link: https://serverless.com/framework/docs/providers/aws/guide/installation/

2. To connect to AWS please follow this. Please note there are several ways to do this. Link:
https://serverless.com/framework/docs/providers/aws/guide/credentials/

3. Step 2 will prompt you for AWS Credentials - Access Key ID and Secret Access Key. This can be accessed by your AWS administrator or you can setup your own AWS account and create these credentials under the AWS Console -> IAM  

4. Run in terminal `serverless invoke -f startChatbot`
5. The function will return an object with a statusCode and Body message that says: "Go Serverless v1.0! Your function executed successfully!"

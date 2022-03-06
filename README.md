# Mocafi

http://mocafi.s3-website-us-east-1.amazonaws.com/

## Front End

The front end is written in Angular with one component, balance-checker.component, and one service, check-balance.service. 

The service has 2 observables: a number, which is populated upon the successful retrieval of an account, and a boolean which is populated on a failed retrieval of an account to indicate either en error has occured or no account was found.

The component calls the service with the card number the user enters. The service calls the backed API. The API returns either the corresponding account or null if no account matches the provided card number. The service then updates either the number or the boolean observable.

The component subscribes to both observables and displays either the balance of the account in the result set or a generic error message, depending on which observable is updated. I did some minor styling and error handling, but nothing like what would be required for an actual production application as I don't believe that was the point of this tech screener.

## Back End

The back end is written in Node, Express, and Mongoose and pulls from a MongoDB. I created a Mongoose Schema, located in ./backend/schemas, to correspond with the provided Data Sample. As this is just a tech screener I disabled all CORS blockers and set the MongoDB to not have any IP restrictions.

There is one API, which is a GET. It returns a success or fail message along with either the account which corresponds to the provided card number, or null in the event no account was found.

## Hosting

The Angular Front End is hosted on AWS S3.
The Node, Express, and Mongoose Back End is hosted on AWS Elastic Beanstalk.
The MongoDB is hosted on Mongo Atlas.

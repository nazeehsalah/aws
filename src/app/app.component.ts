import { Component } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aws';
  constructor(
    // public auth:CognitoUser,
    // public authDe:AuthenticationDetails,
    // public userPool:CognitoUserPool
  ) {
    
    let poolData = {
      UserPoolId: 'us-east-1_ju23D3Hti', // Your user pool id here
      ClientId: '5lp0ihnuvr0g7pc2n2hcvq5vhh', // Your client id here
    };
    let userPoolData = new CognitoUserPool(poolData)
    var userData = {
      Username: 'devadmin',
      Pool: userPoolData,
    };
    var authenticationData = {
      Username: 'devadmin',
      Password: '4/JCnwBM',
    };

    var cognitoUser = new CognitoUser(userData);
    var authenticationDetails = new AuthenticationDetails(authenticationData)
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: result => {
        console.log(result)
        // const accessToken = result.getAccessToken().getJwtToken();
        // const idToken = result.idToken.jwtToken;
        /* Use the idToken for Logins Map when Federating User Pool
         with identity pools or when passing through an Authorization Header
         to an API Gateway Authorizer*/
      },
      onFailure: err => console.log(err),

    }
    )

    // console.log(authUSer)
    // this.userPool.
    // this.auth.authenticateUser({})
    // var docClient = new AWS.DynamoDB.DocumentClient()
  }
}

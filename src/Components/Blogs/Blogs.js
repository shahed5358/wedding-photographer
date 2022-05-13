import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs">
            <h5>Q1 : What is the difference between authentication process and authorization process?</h5>
            <p>Authentication : Authentication is the process of determining the users identity via the available credentials, thus verifying the identity. User identity is confirmed. User and user server is verified. Data is available via Token IDs. User can partially change the authentication details as per the requirement. </p>
            <p>Authorization : Authorization, meanwhile, is the process of providing permission to access the system. Here, the user is given permission to access the system / resources after validation. Here it is validated if the user is allowed to access via some defined rules. Data provided via Access token. User cannot modify the Authorization permissions as it is given to a user by the owner/manager of the system, and only has the authority to change it.</p>
            <h5>Q2 : Why are you using firebase? What other options do you have to implement authentication?</h5>
            <p>Answer : The firebase Components provides us app inventor is super useful, its need to update any numbers of app with fresh data. </p>
            <h5>Q3 : What other services does firebase provide other than authentication?</h5>
            <p>Answer : Firebase supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>
        </div>
    );
};

export default Blogs;
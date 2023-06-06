import React from 'react';
import BasicForm from '../Components/BasicForm.jsx';
import './LoginPage.css'; // Import the CSS file from Login Page

const SignupPage = () => {
  return (
    <div className="loginContainer">
      <div className="loginContent">
        <h3>Registration</h3>
        <BasicForm />
      </div>
    </div>
  );
};

export default SignupPage;
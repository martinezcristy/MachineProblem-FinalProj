import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginPage.css';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
  };

  return (
    <div className="loginContainer">
      <div className="loginContent">
        <h3>Login</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCheckbox">
            <Form.Check type="checkbox" label="Remember me " />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ backgroundColor: 'rgb(196, 173, 84)', borderColor: 'rgb(196, 173, 84)',color: 'white' }}>
          Submit
          </Button>

      {submitClicked && <h3 className="hiMessage">Hi {userName}</h3>}
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

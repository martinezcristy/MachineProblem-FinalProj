import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function BasicForm() {
  const [emailAd, setEmailAd] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);

  const f = [
    { label: 'Email Address', type: 'email', value: emailAd, onChange: setEmailAd },
    { label: 'First Name', type: 'text', value: firstName, onChange: setFirstName },
    { label: 'Password', type: 'password', value: password, onChange: setPassword },
  ];

  const handleChange = (e, index) => {
    const { value } = e.target;
    f[index].onChange(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {f.map((field, index) => (
        <Form.Group className="mb-3" controlId={`form${field.label}`} key={field.label}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type={field.type}
            placeholder={`Enter ${field.label}`}
            value={field.value}
            onChange={(e) => handleChange(e, index)}
          />
        </Form.Group>
      ))}

      <Button variant="primary" type="submit" style={{ backgroundColor: 'rgb(196, 173, 84)', borderColor: 'rgb(196, 173, 84)', color: 'white' }}>
        Submit
      </Button>
      {submitClicked && <h3 className="hiMessage">Hi {firstName}</h3>}
    </Form>
  );
}

export default BasicForm;

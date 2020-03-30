import React, { useState } from 'react';
import {
  Container,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  FormText,
  Label,
  Input,
  Button
} from 'reactstrap';
import { setUserSession, getToken } from '../utils/common';

const Login = props => {
  const email = useFormInput('');
  const password = useFormInput('');
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    //e.preventDefault();
    if (email.value === '') {
      setError('Email required');
      return;
    }
    if (password.value === '') {
      setError('Password required');
      return;
    }
    setLoading(true);
    const loginRequest = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    };
    let resStatus;
    fetch(`${BASE_URL}${'/auth/signin'}`, loginRequest)
      .then(response => {
        console.log(response);
        resStatus = response.status;
        return response.json();
      })
      .then(rdata => {
        console.log('Success:', rdata);
        setLoading(false);

        if (resStatus === 200) {
          //const { token, userId } = rdata;
          console.log(rdata.data.token);
          console.log(rdata.data.userId);
          setUserSession(rdata.data.token, rdata.data.userId);
          console.log(getToken());
          props.history.push('/home');
        } else {
          setError(rdata.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
        setError(error.error);
      });
  };

  return (
    <Container className="App">
      <h2>Sign In</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              id="userEmail"
              placeholder="myemail@email.com"
              required
              value={email}
              {...email}
            />
            <FormFeedback valid>
              That's a tasty looking email you've got there.
            </FormFeedback>
            <FormFeedback>
              Uh oh! Looks like there is an issue with your email. Please input
              a correct email.
            </FormFeedback>
            <FormText>Your username is most likely your email.</FormText>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              required
              value={password}
              {...password}
            />
          </FormGroup>
        </Col>
        {error && (
          <>
            <small style={{ color: 'red' }}>{error}</small>
            <br />
          </>
        )}
        <br />
        <Button onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </Form>
    </Container>
  );
};

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange
  };
};

export default Login;

import React, { Component } from 'react';
import axios from 'axios';
import styles from './LandingPage.module.css';
import {
  Typography,
  Paper,
  TextField,
  Button,
  CircularProgress
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import styled from 'styled-components';

class LandingPage extends Component {
  state = {
    username: '',
    password: '',
    err: false,
    errMsg: '',
    loading: false,
    isAuth: false,
    token: localStorage.getItem('TOKEN')
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signInHandler = () => {
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ err: true, errMsg: 'Please fill-up all fields.' });
    } else {
      this.setState({ loading: true });
      // request config
      const reqConfig = { headers: { 'Content-type': 'application/json' } };
      // body
      const reqBody = JSON.stringify({ username, password });

      // actual request
      axios
        .post(
          'http://lgu.syncsoftsolutions.com/rest-auth/login/',
          reqBody,
          reqConfig
        )
        .then(response => {
          this.setState({
            loading: false,
            err: false,
            errMsg: '',
            token: response.data.key
          });
          localStorage.setItem('TOKEN', 'TOKEN ' + response.data.key);
        })
        .catch(error => {
          this.setState({
            loading: false,
            err: true,
            errMsg: error.response.data.non_field_errors[0]
          });
        });
    }
  };
  render() {
    const { username, password, err, errMsg, loading } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          <Typography style={{ fontWeight: 600 }} variant="h2" gutterBottom>
            Portal
          </Typography>
          <Typography style={{ marginBottom: '42px' }} variant="h3">
            <span style={{ color: '#02A8E8' }}>Syncsoft</span> Solutions
          </Typography>
          <Typography
            style={{ fontSize: '1.23rem', color: 'grey' }}
            variant="subtitle2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi
            officiis corrupti veniam sequi praesentium dolore fugiat temporibus
            pariatur exercitationem!
          </Typography>
        </div>
        <div className={styles.signInForm}>
          <ThemeProvider theme={theme}>
            <Paper style={inStyles.signInPaper} elevation={6}>
              <Typography style={{ marginBottom: '24px' }} variant="h4">
                Online Office Portal
              </Typography>
              <Typography variant="subtitle1" color="error">
                {errMsg}
              </Typography>

              <StyledTextField
                name="username"
                variant="outlined"
                label="Username/Email"
                value={username}
                error={err}
                autoComplete="off"
                onChange={this.onInputChange}
              />
              <StyledTextField
                name="password"
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                error={err}
                onChange={this.onInputChange}
              />

              <div className={styles.ButtonWrapper}>
                <Button
                  className={styles.Button}
                  color="primary"
                  style={inStyles.signInButton}
                  variant="contained"
                  onClick={this.signInHandler}
                  type="submit"
                  disabled={loading}
                >
                  Sign In
                </Button>
                {loading && (
                  <CircularProgress
                    style={{
                      position: 'absolute',
                      top: 48 / 3.5,
                      left: (48 * 3) / 2.5
                    }}
                    size={28}
                    color="secondary"
                  />
                )}
              </div>
            </Paper>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}
export default LandingPage;

const inStyles = {
  signInPaper: {
    maxWidth: '348px',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    padding: '24px'
  },
  signInButton: {
    color: 'white',
    borderRadius: 3,
    border: 0,
    height: 48,
    width: 48 * 3,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
    pointer: 'click'
  }
};

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    margin-bottom: 18px;
    width: 300px;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #02a8e8;
    }
    &:hover fieldset {
      border-color: #02a8e8;
    }
    &.Mui-focused fieldset {
      border-color: #02a8e8;
    }
  }
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#02A8E8'
    },
    secondary: green
  }
});

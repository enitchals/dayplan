// JavaScript source code
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
          <p>Username:</p>
            <input type="text" name="username"><br>
              <p>Terribly Insecure Password:</p>
                <input type="text" name="password"><br>
                  <input type="submit" value="Submit"><br>
      </div>
    );
  }
}

export default SignUp;

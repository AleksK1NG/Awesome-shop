import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class RequestReset extends Component {
  state = {
    email: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={REQUEST_RESET_MUTATION}
        variables={this.state}
      >
        {(requestReset, { error, loading, called }) => {
          return (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                const success = await requestReset();
                this.setState({
                  email: '',
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Request the password reset</h2>
                <Error error={error} />
                {!error &&  !loading && called && <p>Success! Check your email for reset password link</p>}
                <label htmlFor="email">
                  Email
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.saveToState}
                  />
                </label>


                <button type="submit">Request Reset !</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default RequestReset;

import React, {Component} from 'react';
import * as firebase from 'firebase';

import './InviteUser.css';
import '../../css/markdown.css';

export default class InviteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      showSuccess: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value});
    this.setState({showSuccess: false});
  }

  handleSubmit(event) {
    const ref = encodeURIComponent(this.state.email).replace(/\./g, '%2E')

    firebase.database().ref(`online/${ref}`).once('value').then((snapshot) => {
      if (!snapshot.val()) {
        firebase.database().ref(`online/${ref}`).set({
          path: '/'
        });
      }
    }).catch(err => {});

    this.setState({email: ''});
    this.setState({showSuccess: true});

    event.preventDefault();
  }

  render() {
    return (
      <div className="content">
        <span className="invite-user">
          <form id="inviteUser" onSubmit={this.handleSubmit}>
            <label>
              <p>Authorize founder by email address</p>
              <input id="user-email" autoComplete="off" placeholder="email address" value={this.state.email} onChange={this.handleChange} />
            </label>
            <input id="user-submit" type="submit" value="Submit" />
          </form>
          <p>Founder will be added to the allowlist to authenticate with the wiki. They will not get an email.</p>
          <br/>
          { this.state.showSuccess ? 
            <p id="success">Founder successfully added to allowlist.</p>
            : null
          }
        </span>
      </div>
    );
  }
}

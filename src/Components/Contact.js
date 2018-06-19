import React, { Component } from 'react';
import { Segment, Form, Grid, TextArea, Input, Button, Icon } from 'semantic-ui-react'
import Toastr from 'toastr';

function postEndpoint(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  });
}

const SocialContact = ({ href, icon, name }) =>
  <div className={`social-links ${icon}-color`}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon name={icon} />
    </a>
  </div>

const SocialContacts = () =>
  <div className="social">
    <SocialContact
      href={'https://www.linkedin.com/in/anselm-ezumezu-284a81b4'}
      icon='linkedin'
    />
    <SocialContact
      href={'https://github.com/chukwumaijem'}
      icon='github'
    />
    <SocialContact
      href={'https://www.facebook.com/aezumezu'}
      icon='facebook'
    />
    <SocialContact
      href={'https://twitter.com/chuma_ezums'}
      icon='twitter'
    />
    <SocialContact
      href={'https://stackoverflow.com/users/6269670/anselm'}
      icon='stack overflow'
    />
  </div>

class Contact extends Component {
  state = {
    email: '',
    subject: '',
    message: '',
    sending: false
  };
  submitEmail = (e) => {
    e.preventDefault();
    const { email, subject, message } = this.state;

    if (!email) {
      return Toastr.error('Your email is required.')
    }
    if (!subject) {
      return Toastr.error('Subject is required to send email.')
    }
    if (!message) {
      return Toastr.error('Please enter some message in the message field.')
    }
    this.sendEmail(email, subject, message)
  }
  sendEmail(email, subject, message) {
    this.setState({ sending: true });
    const localhost = ['localhost', '127.0.0.1', '0.0.0.0'];
    const urlHost = localhost.includes(window.location.host.split(':')[0]) ?
      'https://anselm-api-staging' : 'https://anselm-api';

    const url = `${urlHost}.herokuapp.com/api/v1/emailClient/send`;
    const data = { email, subject, message }
    postEndpoint(url, data)
      .then(data => {
        if (data.error) {
          return Toastr.error(data.error, 'Error', { closeButton: true });
        }
        Toastr.success('Message sent successfully!');
        this.resetFields();
      })
      .catch((err) => {
        return Toastr.error(err, 'Error', { closeButton: true });
      });
    this.setState({ sending: false });
  }

  resetFields() {
    this.setState({ email: '', subject: '', message: '' });
  }

  handleChange = (e, data) => {
    this.setState({ [data.id]: data.value });
  }

  render() {
    const { email, subject, message, sending } = this.state;
    return (
      <Segment>
        <h2 className="sub-header">Contact Me</h2>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width="8">
              <Form className="col-md-6 form">
                <Form.Field
                  id="email" value={email}
                  control={Input} label='Your Email'
                  placeholder='Your Email' onChange={this.handleChange} />
                <Form.Field
                  id="subject" value={subject}
                  control={Input} label='Subject'
                  placeholder='Subject' onChange={this.handleChange} />
                <Form.Field
                  id="message" value={message}
                  control={TextArea} label='Message' onChange={this.handleChange} />
                <Button basic onClick={this.submitEmail} disabled={sending}>
                  Send
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column width="8">
              <SocialContacts />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Contact;
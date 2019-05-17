import React, { Component } from 'react';
import { Form, Grid, TextArea, Input, Button, Icon } from 'semantic-ui-react'
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

const socialitems = [
  { link: 'https://www.linkedin.com/in/anselm-ezumezu-284a81b4', icon: 'linkedin' },
  { link: 'https://github.com/chukwumaijem', icon: 'github' },
  { link: 'https://www.facebook.com/aezumezu', icon: 'facebook' },
  // { link: 'https://twitter.com/chuma_ezums', icon: 'twitter' },
  // { link: 'https://stackoverflow.com/users/6269670/anselm', icon: 'stack overflow' },
];

const SocialContacts = () =>
  <div className="social">
    {
      socialitems.map((item, index) =>
        <SocialContact
          key={index}
          href={item.link}
          icon={item.icon}
        />
      )
    }
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
      <div>
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
      </div>
    )
  }
}

export default Contact;
import React, { Component } from 'react';
import Toastr from 'toastr';
import helper from 'sendgrid/lib/helpers/mail/mail';
import sendgrid from 'sendgrid/lib/sendgrid';

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

const SocialContact = ({ href, fontAwesome, name }) =>
  <div className={`social-links ${fontAwesome}-color`}>
    <a href={href} target="_blank">
      <i className={`fa ${fontAwesome}`} aria-hidden="true"></i>
    </a>
  </div>

const SocialContacts = () =>
  <div className="col-md-6 col-xs-12 col-sm-12 social">
    <SocialContact
      href={'https://www.linkedin.com/in/anselm-ezumezu-284a81b4'}
      fontAwesome={'fa-linkedin-square'}
    />
    <SocialContact
      href={'https://github.com/chukwumaijem'}
      fontAwesome={'fa-github-square'}
    />
    <SocialContact
      href={'https://www.facebook.com/aezumezu'}
      fontAwesome={'fa-facebook-square'}
    />
    <SocialContact
      href={'https://twitter.com/chuma_ezums'}
      fontAwesome={'fa-twitter-square'}
    />
    <SocialContact
      href={'https://stackoverflow.com/users/6269670/anselm'}
      fontAwesome={'fa-stack-overflow'}
    />
  </div>

class Contact extends Component {
  submitEmail = (e) => {
    e.preventDefault();
    const subject = this.refs.subject.value;
    const email = this.refs.email.value;
    const message = this.refs.message.value;
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
    const url = 'https://anselm-api.herokuapp.com/api/v1/emailClient/send'
    const data = { email, subject, message }
    postEndpoint(url, data)
      .then(data => {
        if(data.error) {
          return Toastr.error(`Error: ${err}`);
        }
        Toastr.success('Message sent successfully!');
      })
      .catch((err) => {
        return Toastr.error(`Error: ${err}`);
      })

    this.resetFields();
  }

  resetFields() {
    this.refs.email.value = '';
    this.refs.subject.value = '';
    this.refs.message.value = '';
  }

  render() {
    return (
      <div id="contact" className="col-md-12">
        <h2 className="sub-header">Contact Me</h2>
        <form className="col-md-6 form">
          <div className="form-group">
            <label htmlFor="usr">Your Email:</label>
            <input ref="email" type="text" className="form-control" id="usr" />
          </div>
          <div className="form-group">
            <label htmlFor="usr">Subject:</label>
            <input ref="subject" type="text" className="form-control" id="usr" />
          </div>
          <div className="form-group">
            <label htmlFor="usr">Message:</label>
            <textarea ref="message" className="form-control" id="usr" rows="10"></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Send Mail"
              className="btn btn-custom form-control submit"
              onClick={this.submitEmail}
            />
          </div>
        </form>
        <SocialContacts />
      </div>
    )
  }
}

export default Contact;
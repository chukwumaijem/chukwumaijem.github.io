import React from 'react';

const SocialContact = ({ href, fontAwesome, name }) =>
  <div className={`social-links ${fontAwesome}-color`}>
    <a href={href} target="_blank">
      <i className={`fa ${fontAwesome}`} aria-hidden="true"></i>
    </a>
  </div>

const Contact = () =>
  <div id="contact" className="col-md-12">
    <h2 className="sub-header">Contact Me</h2>
    <form className="col-md-6 form">
      <div className="form-group">
        <label htmlFor="usr">Your Name:</label>
        <input type="text" className="form-control" id="usr" />
      </div>
      <div className="form-group">
        <label htmlFor="usr">Your Email:</label>
        <input type="text" className="form-control" id="usr" />
      </div>
      <div className="form-group">
        <label htmlFor="usr">Message:</label>
        <textarea className="form-control" id="usr" rows="10"></textarea>
      </div>
      <div className="form-group">
        <input type="submit" className="btn btn-custom form-control submit" />
      </div>
    </form>
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
        href={'fa-facebook-square'}
        fontAwesome={'fa-facebook-square'}
      />
      <SocialContact
        fontAwesome={'fa-twitter-square'}
      />
      <SocialContact
        fontAwesome={'fa-stack-overflow'}
      />
    </div>
  </div>;

export default Contact;
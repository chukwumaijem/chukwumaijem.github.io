import React from 'react';

const Contact = () =>
  <div id="contact">
    <span className="sub-header">Contact Me</span>
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
    <div className="col-md-6 social">
      <div className="social-links email">
        <i className="glyphicon glyphicon-envelope"></i> chukwuma.ezumezu@gmail.com
      </div>
      <div>
        <a href="https://www.linkedin.com/in/anselm-ezumezu-284a81b4" target="_blank">
          <i className="fa fa-linkedin-square social-links" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/chukwumaijem" target="_blank">
          <i className="fa fa-github-square social-links" aria-hidden="true"></i>
        </a>
        <i className="fa fa-facebook-square social-links" aria-hidden="true"></i>
        <i className="fa fa-twitter-square social-links" aria-hidden="true"></i>
        <i className="fa fa-stack-overflow social-links" aria-hidden="true"></i>
      </div>
    </div>
  </div>;

export default Contact;
import React from 'react';

const Contact = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Contact Us</h1>
      <p className="text-center mb-5">Have questions or need assistance? We'd love to hear from you!</p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

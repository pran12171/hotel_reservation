import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out using any of the details below.</p>
        <div className="contact-detail">
          <strong>Address:</strong> Pavartty Lane, Kerala-Style Dining District
        </div>
        <div className="contact-detail">
          <strong>Phone:</strong> +91 98765 43210
        </div>
        <div className="contact-detail">
          <strong>Email:</strong> hello@flavorsofpavartty.com
        </div>
        <div className="contact-detail">
          <strong>Hours:</strong> Mon - Sun, 11:00 AM - 10:30 PM
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
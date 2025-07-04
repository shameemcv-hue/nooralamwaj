import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="fw-bold">TransportCo</h5>
            <p>Providing reliable transport and logistics solutions nationwide.</p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Contact Info</h5>
            <p>Email: sales@noor-alamwaj.com<br />Phone: +971 543523325</p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">© 2025 TransportCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        
        <div className="row justify-content-center">
          <div className="col-md-6">
            
            <div className="mt-4">
              <h3 className="h5 mb-2">Company Address</h3>
              <p className="text-muted">
                Noor Al Amwaj Freight Broker LLC<br />
                Dubai, UAE<br />
                Phone: +971 543523325
                Phone: <a href="tel:+971543523325">+971 543523325</a><br />
                Email: <a href="mailto:sales@nooralamwaj.com">sales@nooralamwaj.com</a>
              </p>
            </div>
            {/* <p className="mt-3 text-muted">Contact form coming soon! Reach us at sales@noor-alamwaj.com.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
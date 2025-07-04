import React from 'react';

function Testimonials() {
  const testimonials = [
    { name: 'John Doe', text: 'TransportCo delivered our goods on time with excellent service!' },
    { name: 'Jane Smith', text: 'Reliable and professional. Highly recommend their warehousing solutions.' },
  ];

  return (
    <section id="testimonials" className="py-5">
      <div className="container text-center">
        <h2 className="h2 fw-bold mb-4">What Our Clients Say</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <p className="card-text">"{testimonial.text}"</p>
                  <h5 className="card-title">{testimonial.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
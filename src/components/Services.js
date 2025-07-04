import React from 'react';

function Services() {
  const services = [
    { title: 'Land Transport', description: 'Land Transportation division has been providing regular full loads and services within the GCC and Levant countries. It maintains flexible and tailor made road services to meet customer needs.' },
    { title: 'Ocean Freight Services', description: 'Noor Al Amwaj handles movement of cargo from/to any global origin/destination, be it LCL or FCL. We have been maintaining an excellent relationship with leading carriers, NVOCC ensuring competitive rates and services' },
    { title: 'Air Cargo', description: 'Noor Al Amwaj offers effective Air Cargo services. Our Air Freight team offers complete logistical solutions and is a trusted partner for Air Cargo Management. Our expertise in operations, customs regulations, licenses & consular documentation help achieve optimum results.' },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="h2 fw-bold mb-4">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3 className="h5 fw-semibold mb-3">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
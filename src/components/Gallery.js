import React from 'react';
import referTrucks from '../assets/refer-trucks.jpg';
import closedBodyTrucks from '../assets/closed-body-trucks.webp';
import flatbedsSideGrill from '../assets/flatbeds-side-grill.jpg';
import curtainsiderTrailers from '../assets/curtainsider-trailers.webp';

function Gallery() {
  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="h2 fw-bold mb-4">Our Fleet</h2>
        <div className="row">
          {/* Refer Trucks */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-center justify-content-center">
              <span className="display-4 text-primary me-3">01</span>
              <div className="text-start">
                <h3 className="h5">Refer Trucks</h3>
                <p className="text-muted">
                  Noor Al Amwaj has one stop solutions for all your temp control shipment, ready to deliver your goods wherever you need them.
                </p>
              </div>
            </div>
            <img
              src={referTrucks}
              alt="Refer Trucks"
              className="img-fluid mt-3"
              style={{ width: '300px', height: '200px', objectFit: 'cover' }}
            />
          </div>

          {/* Closed Body Trucks */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-center justify-content-center">
              <span className="display-4 text-primary me-3">02</span>
              <div className="text-start">
                <h3 className="h5">Closed Body Trucks</h3>
                <p className="text-muted">
                  Noor Al Amwaj fleet of trailers includes both Box type trucks to keep your goods secure throughout the journey.
                </p>
              </div>
            </div>
            <img
              src={closedBodyTrucks}
              alt="Closed Body Trucks"
              className="img-fluid mt-3"
              style={{ width: '300px', height: '200px', objectFit: 'cover' }}
            />
          </div>

          {/* Flatbeds & Side Grill Trailers */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-center justify-content-center">
              <span className="display-4 text-primary me-3">03</span>
              <div className="text-start">
                <h3 className="h5">Flatbeds & Side Grill Trailers</h3>
                <p className="text-muted">
                  When it comes to specialized commodities like heavy equipment and construction materials, Noor Al Amwaj has a flatbed division.
                </p>
                <br></br>
                <br></br>
              </div>
            </div>
            <img
              src={flatbedsSideGrill}
              alt="Flatbeds & Side Grill Trailers"
              className="img-fluid mt-3"
              style={{ width: '300px', height: '200px', objectFit: 'cover' }}
            />
          </div>

          {/* Curtainsider Trailers */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-center justify-content-center">
              <span className="display-4 text-primary me-3">04</span>
              <div className="text-start">
                <h3 className="h5">Curtainsider Trailers</h3>
                <p className="text-muted">
                  Noor Al Amwaj is certified to deliver most hazardous materials, including various chemicals, sensitive materials and dangerous equipment in curt trailers to make sure your material delivered to destination in a safe and sound condition.
                </p>
              </div>
            </div>
            <img
              src={curtainsiderTrailers}
              alt="Curtainsider Trailers"
              className="img-fluid mt-3"
              style={{ width: '300px', height: '200px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
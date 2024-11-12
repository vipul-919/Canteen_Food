import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Burger from "../../assets/hero/hero-2.png";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">The Canteen Food</h1>
              <h2 className="text-white"></h2>
              <p className="text-white pt-2 pb-4">
                "Indulge in the perfect blend of flavors at our restaurant, where canteen classics meet culinary excellence. Savor the essence of home-cooked goodness with a gourmet touch, creating an unforgettable dining experience for every palate."
              </p>
              {/* Updated Link to point to the menu page route */}
              <Link to="/menu" className="btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;

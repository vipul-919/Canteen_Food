import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
function Contact() {
  return (
    <Layout>
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes SERVICES</h2>
            <p>
            Order now and get your Food ready or Visit our Website To Order Online.
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: 999-888-7777
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
    </Layout>
  );
}

export default Contact;

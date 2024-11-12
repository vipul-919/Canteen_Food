import React from 'react';
import img2 from '../../assets/about/about-img2.jpg';
import Layout from "../../components/Layouts/Layout";


const AboutUs = () => {
  return (
    <Layout>
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-text">
          <h1 style={{ color: 'white', fontSize: '64px' }}>Delicious Points</h1>
          <br></br>
          <h2 style={{ color: 'yellow' ,fontFamily: 'Segoe Script'}}>About Us</h2>
          <h1 style={{ color: 'red', fontSize: '36px',paddingTop: '4em' }}>Delicious Points</h1>

            <p>Welcome to our canteen! At our heart, we're more than just a place to grab a meal; we're a culinary hub dedicated to delivering delightful dining experiences. Nestled in the heart of our community, our canteen is a testament to our passion for good food, friendly service, and creating memorable moments for our patrons.Our journey began with a simple vision: to offer delicious and nutritious food options that cater to every palate. We strive to be the go-to destination for individuals seeking quality meals crafted with care and attention to detail. Our mission is to provide a diverse menu featuring a fusion of flavors, prepared with fresh, locally-sourced ingredients.</p>
            <p>Behind every delicious dish is a team of passionate individuals dedicated to their craft. Our chefs are culinary artists who infuse creativity and expertise into every recipe they create. From the kitchen staff to the serving team, every member of our team is committed to providing exceptional service and creating a welcoming atmosphere for our guests.Quality is the cornerstone of our culinary philosophy. We understand the importance of using fresh, high-quality ingredients to create dishes that tantalize the taste buds and nourish the body. From crisp vegetables to succulent meats, every ingredient that graces our kitchen is carefully selected to ensure excellence in taste and nutrition.
            At our canteen, customer satisfaction is our top priority. We believe in going above and beyond to exceed the expectations of our patrons. Whether you're dining in with friends and family or grabbing a meal on the go, you can expect prompt and friendly service from our team. Your feedback is invaluable to us as we continuously strive to improve and enhance your dining experience.</p>
          </div>
        </div>
        <div className="about-us-image">
          <img
            src={img2}
            alt="Canteen" />
        </div>
      </div>
    </Layout> 
  );
};

export default AboutUs;


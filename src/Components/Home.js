import React from "react";
import { Layout } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Head() {
  return (
    <Layout>
      <div className="bgcolor">
        <h1 className="welcome">
          welcome to <br></br>Technowell
        </h1>
        <p className="para">
          Technowell Enterprise services is established by highly<br></br>
          experienced professionals from information technology<br></br>
          and communications domains on single platform.<br></br>
        </p>
        <div className="button">
          <Button type="primary" shape="round">
            <Link to="/ContactUs"> Enquiry</Link>
          </Button>
        </div>
      </div>
      <div className="row">
        <a href>
          <img className="teamimage" src="image/logo/home-about.jpg" alt="" />
        </a>
        <div className="abouttext">
          <h4 className="h4">About Us</h4>
          <h3 className="h3">Know interesting things</h3>
          <p className="para2">
            Technowell is one of the promising Information technology 
            development organization carried out on application development to
            tailor to user needs.
          </p>
          <div>
            <Button type="primary" shape="round" className="readmore">
            <Link to="/aboutUs">  <span className="button2 "> Read More</span></Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="weprovideall">
        <h4 className="homeOS">Our Services</h4>
        <h5 className="weprovide"> We Provide</h5>
        <p className="weprovidepara">
          We have a good experience in software development and strong team of{" "}
          <br></br>software professionals empowers the application development
          capability at <br></br>iAD, Technowell. The applications are developed
          based on client requirement.
        </p>
      </div>
      <div className="cardsall">
        <div>
          <div className="homecard">
            <a href="/services/itServices">
              {" "}
              <img className="cardimage" src="cards/s2.jpg" alt="" />
            </a>

            <br></br>
            <p className="cardtext">IT SERVICES</p>
          </div>
        </div>
        <div>
          <div className="homecard">
            <a href="/services/digitalMarketing">
              {" "}
              <img className="cardimage" src="cards/digital.jpg" alt="" />
            </a>

            <br></br>
            <p className="cardtext">DIGITAL MARKETING</p>
          </div>
        </div>

        <div>
          <div className="homecard">
            <a href="/services/geoSpatialServices">
              {" "}
              <img className="cardimage" src="cards/s1.jpg" alt="" />
            </a>

            <br></br>
            <p className="cardtext">GEO SPATIAL SERVICES</p>
          </div>
        </div>
        <div>
          <div className="homecard">
            <a href="/services/cad">
              <img className="cardimage" src="cards/s2.jpg" alt="" />
            </a>

            <br></br>
            <p className="cardtext">CAD</p>
          </div>
        </div>
        <div>
          <div className="homecard">
            <a href="/services/marketResearchApps">
              {" "}
              <img className="cardimage" src="cards/s2.jpg" alt="" />
            </a>

            <br></br>
            <p className="cardtext">MARKET RESEARCH APPS</p>
          </div>
        </div>
        <div>
          <div className="homecard">
            <a href="/services/staffingServices">
              <img className="cardimage" src="cards/s2.jpg" alt="" />
            </a>

            <br></br>
            <p className="cardtext">STAFFING</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import React from "react";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled,
  EnvironmentOutlined,
  MobileOutlined,
  MailOutlined,
} from "@ant-design/icons";


export default function Footer() {
  return (
    <>
      <div className="footerbackground">
        <div>
          <a href="/">
            <img className=" footrtlogo" src="assets/images/logo.png" alt="TECHNOWELL" />
          </a>
          <div >
            <ul className="iconstyle">
              <li>
              <FacebookFilled />
           </li>
           <li>
              <InstagramFilled />
            </li>
            <li>
              <TwitterCircleFilled />
              </li>
            <li>
              <YoutubeFilled />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h5 className="footerheading">Quick Links</h5>
          </div>
          <div>
            <ul className="footerul">
              <li>
                <a className="anchortext" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="anchortext" href="/aboutUs">
                  About Us
                </a>
              </li>
              <li>
                <a className="anchortext" href="/Alliances">
                  Alliances
                </a>
              </li>
              <li>
                <a className="anchortext" href="/ContactUs">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h5 className="footerheading">Services</h5>
          </div>
          <div>
            <ul className="footerul">
              <li>
                <a className="anchortext" href="/services/itServices">
                  it Services
                </a>
              </li>
              <li>
                <a className="anchortext" href="/services/digitalMarketing">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a className="anchortext" href="/services/cad">
                  CAD Services
                </a>
              </li>
              <li>
                <a className="anchortext" href="/services/geoSpatialServices">
                  Geo Spatial Services
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h5 className="footerheading">Address</h5>
          </div>
          <div>
            <ul className="footerul">
              <li>
                <EnvironmentOutlined /> HIG-B-174, APHB Colony, Phase-IV,
                <br></br>
                Gachibowli, Hyderabad, Telangana 500032
              </li>
              <li>
                <MobileOutlined />
                +91-75693 56171
              </li>
              <li>
                <MailOutlined /> info@technowell.org.in
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footertext">
        <p className="footer-final-text">
          2013
          <a className="anchortext" href="/aboutUs">
            Technowell
          </a>
          - All rights reserved.
        </p>
      </div>
    </>
  );
}

import React from "react";
import Title from "./Title";
import {
  EnvironmentOutlined,
  MobileOutlined,
  MailOutlined,
} from "@ant-design/icons";
// import { Card } from 'antd';
export default function Contact() {
  return (
    <>
      <Title text="Contact Us" />
      <div className="Iconsflex">
        <div className="contacticon">
          <MailOutlined />
        </div>
        <div className="Contacticon2">
          <h2 className="mailfont">mail address</h2>
          <span>info@technowell.org.in</span>
        </div>
        <div className="contacticon">
          <MobileOutlined />
        </div>
        <div className="Contacticon2">
          <h2 className="mailfont">our phone</h2>
          <span>+91-75693 56171</span>
        </div>
        <div className="contacticon">
          <EnvironmentOutlined />
        </div>
        <div className="Contacticon2">
          <h2 className="mailfont">our Location</h2>
          <span>
            HIG B 174, APHB Colony, Gachibowli,<br></br>
            Hyderabad-500032.
          </span>
        </div>
      </div>

      <div className='leavemessage'>
        <h6>Leave a message</h6>
      </div>
      <div className="inputpadding">
        <div className="inputflex">
          <div className="borderwidth">
            <input type="text" placeholder="Enter Your Name" id="fname" />
          </div>
          <div className="borderwidth">
            <input type="text" placeholder="Enter Your Mail" id="fname" />
          </div>
        </div>
        <div className="inputflex">
          <div className="borderwidth">
            <input type="text" placeholder="enter Mobile Number" id="fname" />
          </div>
          <div className="borderwidth">
            <input type="text" placeholder="enter your Location" id="fname" />
          </div>
        </div>
        <div className="borderwidth">
          <textarea placeholder="Write a Message" id="fname" />
        </div>
        <div className="sendbutton">
          <input type="Submit" value="send" id="formsend" />
        </div>
      </div>
    </>
  );
}

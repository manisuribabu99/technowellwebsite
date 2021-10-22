import React from "react";
import Title from "./Title";

export default function AboutUs() {
  return (
    <>
      <Title text="About Us"/>
      <div className="abouttextflex">
        <div className="borderbox1">
          <div>
            <h4 className="Abouth4">Our Mission</h4>
          </div>
          <p className="Missionparagraph">
            Our products are designed in innovated cutting-edge manner to meet
            the rapidly evolving and growing requirements of the digitalized
            world. we also ensure availability of systems for use, reduce
            maintenance and support efforts, improve scalability, and increase
            throughput by improving productivity over time for industries.
          </p>
        </div>
        <div className="borderbox2">
          <div>
            <h4 className="Abouth4">Our Vission</h4>
          </div>
          <p className="Missionparagraph">
            We seek to be one of the top IT Company in India with utmost client
            satisfaction by gaining employee satisfaction and retention,
            adhering to the highest quality standards. Quality is an
            all-pervasive commitment at Technowell.
          </p>
        </div>
      </div>
      <div className="imageflex">
        <div className="wedoparagraph">
          <h3 className="abouth3">What We Do ?</h3>
          <p className="Aboutparagraph">
            Technowell is one of the promising Information technology
            development organization carried out on application development to
            tailor to user needs. In addition Technowell design and develops
            embedded systems for home security, GPS, GIS, Real time and Mobile
            applications. Our customers reach us as a single point for reliable
            systems
          </p>
          <br></br>
          <p className=" Aboutparagraph">
            On 6th Nov, 2013 Technowell Enterprise Services has emerged. Brains
            of technology research and applications are the core of Technowell.
            Rechristened from Metasys services, some of the team members have
            around three decades of implemented project expertise. Technowell
            USP lies in identification crux, process and Development. Our armory
            is enhanced by technocrats from IT, PSU and Education domains.
            Strength lies in software development, GPS, GIS, mobile technologies
            and Embedded Projects. We purse to contribute to the Agriculture and
            Corporate segments through our affordable innovative technologies.
            Our service model is designed to ensure quality effective
            maintenance and scalability and productivity over time. We stand to
            render services at international scenario either by service or
            consultancy.
          </p>
        </div>

        <div>
          <img className="Aboutimage" src="About/aboutUs.jpg" alt="" />
        </div>
      </div>
      
    </>
  );
}

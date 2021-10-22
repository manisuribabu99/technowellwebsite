import React from "react";
import { Card, Col, Row } from "antd";

export default function CAD() {
  return (
    <>
      <div>
        <h1 className="cadS1">CAD Services</h1>
      </div>
      <div>
        <p className="Cadparagraph">
          We provide CAD Drafting services (Equipment, Piping, Civil,
          Structural, Architectural, Electrical etc), 3D Model Visualization,
          CAD Conversion services, Site Plan and Real Estate Floor Plan
          development and drawings. We believe in working closely with clients
          to understand their unique requirements and specialize in providing
          customized business solutions.
        </p>
        <p className="Cadparagraph">
          We have technology partners that we team up with to provide on time,
          high quality CAD Conversion Services. We regularly explore, evaluate
          and adapt new technologies strategies to help our Clients reduce
          costs, optimize time and increase profitability. We can offer fixed
          cost pricing or dedicated FTE team model.
        </p>
        <p>
          <b className="Btext">Our Tailored CAD Conversion Services include:</b>
        </p>
        <hr></hr>
        <ul className="Cadparagraph">
          <li>
            Paper to CAD Conversion (converting legible Board drawings to CAD
            compatible file)
          </li>
          <li>
            PDF to CAD Conversion (converting legible PDF drawings to CAD
            compatible file)
          </li>
          <li>
            Image to CAD Conversion (converting high resolution JPEG drawings to
            CAD compatible file)
          </li>
        </ul>
        <p>
          <b className="Btext">Our specializations are</b>
        </p>
        <hr></hr>
        <div className="cadflex">
          <div>
            <p>
              <b className="Btext">CAD Drafting</b>
            </p>
            <ul>
              <li>Equipment.</li>
              <li>Piping.</li>
              <li>Structural</li>
              <li>Electrical</li>
            </ul>
          </div>
          <div>
            <p>
              <b className="Btext">CAD Drafting</b>
            </p>
            <ul>
              <li>Equipment.</li>
              <li>Piping.</li>
              <li>Structural</li>
              <li>Electrical</li>
            </ul>
          </div>
          <div>
            <p>
              <b className="Btext">CAD Drafting</b>
            </p>
            <ul>
              <li>Equipment.</li>
              <li>Piping.</li>
              <li>Structural</li>
              <li>Electrical</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="cadimageflex">
          <div>
            <h4 className="deticated">Dedicated Team</h4>
            <img className="Cadimage" src="CAD/01.png" alt="" />
          </div>
          <hr></hr>
          <div>
            <h4 className="deticated">Dedicated Team</h4>
            <img className="Cadimage" src="CAD/01.png" alt="" />
          </div>
          <hr></hr>
          <div>
            <h4 className="deticated">Dedicated Team</h4>
            <img className="Cadimage" src="CAD/01.png" alt="" />
          </div>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Accessibility">
                Save storage costs and space by conserving drawings in a digital
                format on the cloud and easily accessible by branches around the
                world.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Convenience">
                Drawings in a digital format don't degrade over time, unlike
                paper/linen drawings. Consistency can be maintained throughout
                the whole archive.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Easy to use">
                CAD drawings are easier to edit and update than working on
                multiple revisions on a paper drawing. Gives control and saves
                time for recreating a master file.
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

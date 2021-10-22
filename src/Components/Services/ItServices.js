import React from "react";
import { Collapse } from "antd";

export default function ItServices() {
  const { Panel } = Collapse;
  const text = `
  We have experienced core development team in different technologies for web application development which includes project analysis, formulation and concept planning, right up to project management and installation. We develop customized Software that is completely based on user's requirement on any of the mentioned platform / languages.
  
`;

  const text2 =
    "We have experienced native and cross mobile development team for mobile application development to take up challenging innovative functionalities on mobile application.";
  const text3 =
    "E-governance applications are to transform the efficiency, effectiveness, transparency, and accountability of exchange of information and transaction between Governments, between Government agencies, between Government and Citizens between Government and businesses.";
  return (
    <>
      <div>
        <h1 className="cadS1">IT Services</h1>
      </div>
      <div>
        <p className="Cadparagraph">
          We have a good experience in software development and strong team of
          software professionals empowers the application development capability
          at iAD, Technowell. The applications are developed based on client
          requirement.
        </p>
        <p className="Cadparagraph">
          Our competencies in Java, PHP and C/C++ are demonstrated in various
          network-based applications and iOS, Android and CORDOVA in mobile
          applications. SQL/ PGSQL database engines support most of these
          applications.
        </p>
        <Collapse accordion>
          <Panel header="Web Applications" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="Mobile Applications" key="2">
            <p>{text2}</p>
          </Panel>
          <Panel header="E Governance" key="3">
            <p>{text3}</p>
          </Panel>
        </Collapse>
      </div>
    </>
  );
}

import React from "react";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";
import CAD from "./Services/CAD";
import GeoSpatialServices from "./Services/GeoSpatialServices";
import ItServices from "./Services/ItServices";
import DigitalMarketing from "./Services/DigitalMarketing";
import MarketResearchApps from "./Services/MarketResearchApps";
import StaffingServices from "./Services/StaffingServices";
import Title from "./Title";
import { Card } from 'antd';
const { Sider, Content } = Layout;

export default function Services(props) {
  const history = useHistory();
  const { route } = props;
  const handleMenu = (input) => {
    history.push(input);
  };
  return (
    <>
      <Title text="Services" />
      <Layout>
        <Sider>
        
          <div>
          
            
          <div>
          
            <ul className="ullist">
              <li
                className={`colc-${route === "cad" ? "active" : null}`}
                onClick={() => handleMenu("/services/cad")}
              >
                CAD
              </li>
              <li
                className={`colc-${
                  route === "geoSpatialServices" ? "active" : null
                }`}
                onClick={() => handleMenu("/services/geoSpatialServices")}
              >
                Geo Spatial Services
              </li>
              <li
                className={`colc-${route === "itServices" ? "active" : null}`}
                onClick={() => handleMenu("/services/itServices")}
              >
                It Services
              </li>
              <li
                className={`colc-${
                  route === "digitalMarketing" ? "active" : null
                }`}
                onClick={() => handleMenu("/services/digitalMarketing")}
              >
                Digital Marketing
              </li>
              <li
                className={`colc-${
                  route === "marketResearchApps" ? "active" : null
                }`}
                onClick={() => handleMenu("/services/marketResearchApps")}
              >
                Market ReSearch Apps
              </li>
              <li
                className={`colc-${
                  route === "StaffingServices" ? "active" : null
                }`}
                onClick={() => handleMenu("/services/StaffingServices")}
              >
                Staffing Services
              </li>
            </ul>
            
            </div>
            
          </div>
          
        </Sider>
        <Layout>
          <Content>
            <div>
              {route === "cad" && <CAD />}
              {route === "geoSpatialServices" && <GeoSpatialServices />}
              {route === "itServices" && <ItServices />}
              {route === "digitalMarketing" && <DigitalMarketing />}
              {route === "marketResearchApps" && <MarketResearchApps />}
              {route === "StaffingServices" && <StaffingServices />}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

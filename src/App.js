import React from "react";
import HeaderComponent from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Alliances from"./Components/Alliances";
import ContactUs from"./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/services/cad"><Services route="cad"/></Route>
        <Route path="/services/geoSpatialServices"><Services route="geoSpatialServices"/></Route>
        <Route path="/services/itServices"><Services route="itServices"/></Route>
        <Route path="/services/digitalMarketing"><Services route="digitalMarketing"/></Route>
        <Route path="/services/marketResearchApps"><Services route="marketResearchApps"/></Route>
        <Route path="/services/StaffingServices"><Services route="StaffingServices"/></Route>
      
        <Route path="/Alliances" component={Alliances}/>
        <Route path="/ContactUs" component={ContactUs}/>
       
      </Switch>
      <div><Footer/></div>
    </Router>
 

  );
}

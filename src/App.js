import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonGroup } from "reactstrap";
import "./App.css";
import Link from "./components/Links";
import Navigation from "./components/NavBar";
import Contacts from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation
          className="logo"
          image="http://wellvana.com/wp-content/uploads/2020/01/Wellvana_Logo-1400x356-2-e1578693909470.png"
        />
        <div className="container-fluid">
          <ButtonGroup size="lg">
            <Link
              url="http://wellvana.com/markets/"
              className="my-button"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons2_0005_motus-creative-group-marketing-agency-service-icons-branding-Asset-1.png"
              text="Find a Provider"
            ></Link>
            <Link
              url="#"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons-1_0007_Layer-14.png"
              text="Patient Resources"
            ></Link>
          </ButtonGroup>
          <ButtonGroup size="lg">
            <Link
              url="https://apps.apple.com/us/app/sherpaa/id934508304"
              className="my-button"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons-1_0001_Layer-20.png"
              text="TeleMedicine"
            ></Link>
            <Link
              url="https://pratter.us/"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons-1_0006_Layer-15.png"
              text="Pratter.us"
            ></Link>
          </ButtonGroup>
          <ButtonGroup size="lg">
            <Link
              url="http://altrisk.com/"
              className="my-button"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons2_0004_motus-creative-group-marketing-agency-service-icons-branding-Asset-2.png"
              text="Access Plan Info"
            ></Link>
            <Link
              url="#"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons2_0001_motus-creative-group-marketing-agency-service-icons-branding-Asset-5.png"
              text="Care Management"
            ></Link>
          </ButtonGroup>
          <ButtonGroup size="lg">
            <Link
              url="http://wellvana.com/wp-content/uploads/2020/02/Alpha-listing-Wellvana-merged-Alpha.pdf"
              className="my-button"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons-1_0002_Layer-18.png"
              text="Physicians"
            ></Link>
            <Link
              url="http://wellvana.com/wp-content/uploads/2020/02/2019-Wellvana-Providers-Directory-Specialties.pdf"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons2_0000_motus-creative-group-marketing-agency-service-icons-branding-Asset-6.png"
              text="Specialties"
            ></Link>
          </ButtonGroup>
          <ButtonGroup size="lg">
            <Link
              url="http://wellvana.com/wp-content/uploads/2020/02/2019-Wellvana-Providers-Directory-Practice.pdf"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons-1_0008_Layer-13.png"
              text="Practices"
            ></Link>
          </ButtonGroup>
        </div>
        <div className="contactUs">
          <Contacts
            url="http://wellvana.com/contact-us/"
            text="Contact Us"
          ></Contacts>
        </div>
      </div>
    );
  }
}
export default App;

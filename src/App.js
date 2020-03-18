import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router , Link, Route} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Commercial from './Components/commercial/Commercial';
import HomePage from './Components/home/HomePage';
import RentPage from './Components/rent/RentPage';
import SellPage from './Components/sell/SellPage';
import Management from './Components/management/Management';
import ContactUs from './Components/contact-us/ContactUs';

class NonFixedNavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  linkStyle = {
    color : "white",
    textDecoration : "none"
  }

  render() {
    const container = { height: 1300 }
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar color="special-color-dark" dark expand="md">
              <MDBNavbarBrand >
                <strong>BARKELEY SQUARE</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem >
                    <MDBNavLink to="/home"><Link style = {this.linkStyle} to = "/home" >Home</Link></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/rent"><Link style = {this.linkStyle} to = "/rent" >For Rent</Link></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/sell"><Link style = {this.linkStyle} to = "/sell" >For Rent</Link></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/management"><Link style = {this.linkStyle} to = "/management" >Management</Link></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/commercial"><Link style = {this.linkStyle} to = "/commercial" >Commercial</Link></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/contact-us"><Link style = {this.linkStyle} to = "/contact-us" >Contact Us</Link></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="linkedin" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>

          <Route path = "/home" component = {HomePage} />
          <Route path = "/rent" component = {RentPage} />
          <Route path = "/sell" component = {SellPage} />
          <Route path = "/management" component = {Management} />
          <Route path = "/commercial" component = {Commercial} />
          <Route path = "/contact-us" component = {ContactUs} />

        </Router>
      </div>
    );
  }
}

export default NonFixedNavbarExample;
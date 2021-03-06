import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <img src={props.image}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="http://wellvana.com/markets/">
                Find Wellvana Provider
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Patient Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://apps.apple.com/us/app/sherpaa/id934508304">
                TeleMedicine
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://pratter.us/">Financial Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://altrisk.com/">Access Plan Info</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Care Management</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://wellvana.com/wp-content/uploads/2020/02/Alpha-listing-Wellvana-merged-Alpha.pdf">
                Physicians
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://wellvana.com/wp-content/uploads/2020/02/2019-Wellvana-Providers-Directory-Specialties.pdf">
                Specialties
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://wellvana.com/wp-content/uploads/2020/02/2019-Wellvana-Providers-Directory-Practice.pdf">
                Practices
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

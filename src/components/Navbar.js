import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="navbar" expand="md">
        <NavbarBrand className="navbar" href="/">
          TEAMWORK
        </NavbarBrand>
        <NavbarToggler className="navlink" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="navlink" href="/gifs/">
                Gifs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navlink"
                href="https://github.com/reactstrap/reactstrap"
              >
                Articles
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="navlink" nav caret>
                Admin
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Create User</DropdownItem>
                <DropdownItem>User Profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Login</NavbarText>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

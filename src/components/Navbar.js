import React, { useState } from 'react';
import { removeUserSession } from '../utils/common';
import { useHistory } from 'react-router-dom';

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
  NavbarText,
  Button
} from 'reactstrap';

const NavBar = props => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    history.push('/login');
  };

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
          <NavbarText className="ntext">Welcome</NavbarText>
          <Button
            className="navbarButton"
            onClick={handleLogout}
            value="Logout"
          >
            Logout
          </Button>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

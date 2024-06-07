import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CardSummary";
import { Link } from "react-router-dom";

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ms-auto" navbar>
              <NavLink>
                <Link to="form1">Form Demo 1</Link>
              </NavLink>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary removeFromCard={this.props.removeFromCard} card={this.props.card}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class CardSummary extends Component {
  renderSummary() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Sepet - {this.props.card.length}
          </DropdownToggle>
          <DropdownMenu end>
            {this.props.card.map((cardItem) => (
              <DropdownItem key={cardItem.product.id}>
                <Badge
                  color="danger"
                  onClick={() => this.props.removeFromCard(cardItem.product)}
                >
                  X
                </Badge>
                {cardItem.product.productName}
                <Badge color="success">{cardItem.quantity}</Badge>
              </DropdownItem>
            ))}
          </DropdownMenu>
          <Link to="card">Go to card</Link>
        </UncontrolledDropdown>
      </div>
    );
  }

  renderEmtpyCart() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.card.length > 0
          ? this.renderSummary()
          : this.renderEmtpyCart()}
      </div>
    );
  }
}

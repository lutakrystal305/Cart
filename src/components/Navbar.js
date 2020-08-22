import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";
import { CartContext } from '../context/Cart';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Krystal</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink>
                    <Link to="/">Home</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Link to="/product">Products</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <CartContext.Consumer>
                        {({ cartItems }) => (
                            <Link to="/cart">Cart ({cartItems.length}) </Link>
                        )}
                    </CartContext.Consumer>
                </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Luta Krystal</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;

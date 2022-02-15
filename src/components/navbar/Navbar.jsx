import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Container,Wrapper, Left, Logo, Menue, ListItem, Button } from './NavbarStyle';

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        <Link className="theLink" to='/'>
                            Agency
                        </Link>
                    </Logo>
                    <Menue>
                        <ListItem>
                            <NavLink className="theLink" to='/'>
                                Home
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="theLink" to="/features">
                                Features
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="theLink" to="/services">
                                Services
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="theLink" to="/price">
                                Pricing
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="theLink" to="/contact">
                                Contact
                            </NavLink>
                        </ListItem>
                    </Menue>
                </Left>
                <Button>JOIN NOW</Button>
            </Wrapper>
        </Container>
    );
}

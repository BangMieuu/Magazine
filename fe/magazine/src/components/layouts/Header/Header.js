import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './index.css';
import { logoutAction } from '../../../actions/user.action';

const Header = () => {
    const { user } = useSelector(({ userLogin }) => userLogin);
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutHandler = () => {
        dispatch(logoutAction());
        history.push('/login');
    };

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Magazine</Navbar.Brand>
                    </LinkContainer>
                    {user && (
                        <>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <LinkContainer to="/faculty">
                                        <Nav.Link>Faculty <i className="fas fa-chalkboard-teacher"></i></Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/chat">
                                        <Nav.Link>Chat <i className="far fa-comments"></i></Nav.Link>
                                    </LinkContainer>
                                    <NavDropdown title={`Mr. ${user.profile.firstName}`} id="username">
                                        <LinkContainer to={`/profile/${user._id}`}>
                                            <NavDropdown.Item>
                                                Profile <i style={{ marginLeft: '25px' }} className="fas fa-user-alt"></i>
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Logout <i style={{ marginLeft: '25px' }} className="fas fa-sign-out-alt"></i>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </>
                    )}
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;

import React, { useEffect } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';

export default function Header(props) {
    useEffect(() => {
        document.getElementById('main-wrapper').classList.toggle('toggled');
        return () => {
            document.getElementById('main-wrapper').classList.remove('toggled');
        }
    }, []);

    function handleClickToSidebar(e) {
        e.preventDefault();
        document.getElementById('main-wrapper').classList.toggle('toggled');
    }

    return (
        <header>
            <Navbar color="light" light>
                <NavbarBrand href="/">
                    <img src="https://via.placeholder.com/150x50" alt=""/>    
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavbarToggler onClick={handleClickToSidebar} />
                </Nav>
            </Navbar>
        </header>
    );
}
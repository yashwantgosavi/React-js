import React from "react";
import './App.css';
import styled from 'styled-components';
const Navbar = styled.nav`
background-color:red;
`
class Nav extends React.Component {

    render() {
        return (
            <Navbar>
                <ul>
                    <li>Home</li>
                    <li>about us</li>
                    <li>portfolio</li>
                    <li>contact</li>
                    <li>Address</li>
                </ul>
            </Navbar>
        )
    }


}

export default Nav;

// const styles = {
//     nav: {
//         backgroundColor: 'red'
//     }
// }
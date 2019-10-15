import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavBar = styled.div`
    background: deeppink;
    height: 50px;
    display: grid;
    grid-template-columns: 200px 200px 1fr;

    p {
        color: #fff;
        font-size: 18px;
        margin: 0;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        padding: 12px 0 0 30px;
    }
    p.logo {
        grid-column: 1/2;
    }
    p.countries {
        grid-column: 3/4;
    }
    a {
        text-decoration: none;
    }

`;


const NavComponent = () => {
    return (
        <NavBar>
            <Link to="/">
                <p className="logo">GlobeTrotter Home
                </p>
            </Link>
            <Link to="/countries">
                <p className="countries">Countries
                </p>
            </Link>
        </NavBar>
    )
};

export default NavComponent;
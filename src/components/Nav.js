import React from 'react'
import styled from 'styled-components';

export default function Nav() {
    return (
        <nav>
               <StyledNav>
            <h1><a id="logo" href="#">Capture</a></h1>
            <ul>
                <li>
                    <a href="#">1. About us</a>
                </li>

                <li>
                    <a href="#">2. Our Work</a>
                </li>

                <li>
                    <a href="#">3. Contact us</a>
                </li>
            </ul>
            </StyledNav>
        </nav>
     
    )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display:flex;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    padding:1rem 10rem;

    a{
        color:white;
        text-decoration:none;
    }

    ul{
        display:flex;
        list-style:none;
    }
    #logo{
        font-size:1.5rem;
        font-family:"Lobster", cursive;
        font-weight:lighter;
    }
    li{
        padding-left:10rem;
        position:relative;
    }
`;

import React from 'react'
import styled from 'styled-components'


function Header() {
    return (
        <Container>
           <a href>
               <img src="/images/logo.svg" alt="Tesla Logo"/>
           </a>

           <Menu>
                
                    <a href="https://mdarifuzzaman.com"> Model S</a>
                    <a href="https://mdarifuzzaman.com"> Model 3</a>
                    <a href="https://mdarifuzzaman.com"> Model X</a>
                    <a href="https://mdarifuzzaman.com"> Model Y</a>
                
           </Menu>

           <RightMenu>
               
               <a href="https://mdarifuzzaman.com">Shop </a>
               <a href="https://mdarifuzzaman.com">Tesla Account </a>
               

           </RightMenu>

        </Container>
    )
}

export default Header

const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;

`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 600;
        text-decoration: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`

const RightMenu = styled.div ` 
    a {
        font-weight: 600;
        text-decoration: uppercase;
        margin-right: 10px;
        
    }
`
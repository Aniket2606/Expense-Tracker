import React from 'react'
import styled from 'styled-components'
import logo from "../img/logo.png"
import logo1 from "../img/logo1.png"

function LogoSection() {
  return (
    <LogStyled>
    <div className="brand">
        <img src={logo} className="logo" alt=""/>
        <img src={logo1} className="logo1" alt=""/>

        
    </div>
    </LogStyled>
  )
}

const LogStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    .logo{
      width: 28rem;
      height: 10rem;
      max-width: 100%;
    }
    .logo1{
      display: none;
    }
    @media (max-width: 1100px) {
       position: relative;
       float: right;
       top: -.5rem;
       margin-right: 1.4rem;
      ${'' /* changing logo when window size reduces */}
       .logo{    
        display: none;
       }

       .logo1{
        display: block;
        width: 6rem;
        height: 6rem;
        max-width: 100%;
       }
      
    }

    @media (max-width: 820px){
      margin-right: 0rem;
      .logo1{
        width: 5.5rem;
        height: 6.5rem;
      }
    }
`;

export default LogoSection
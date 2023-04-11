import React from 'react'
import styled from 'styled-components'
import logo from "../img/logo.png"

function LogoSection() {
  return (
    <LogStyled>
    <div className="logo">
        <img src={logo} alt=""/>
        
    </div>
    </LogStyled>
  )
}

const LogStyled = styled.div`
    padding-top: 0%;
    position: absolute;
    top: 0;
    left: 0;
    
    
`;

export default LogoSection
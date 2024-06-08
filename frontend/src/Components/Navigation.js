import React from 'react'
import styled from 'styled-components';
import avatar from '../img/avatar.png'
import { menuItems } from '../utils/menuItems'


export default function Navigation({ active, setActive }) {
    return (
        <>
            <NavStyled>
                <div className="user-con">
                    <img src={avatar} alt="" />
                    <div className="text">
                        <h2>Aniket</h2>
                        <p>Student</p>
                    </div>
                </div>
                <ul className="menu-items">
                    {menuItems.map((item) => {
                        return <li
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            // active class for selected option
                            className={active === item.id ? 'active' : ''}
                        >
                            <span className="icon"> {item.icon}</span>
                            <span className="item">{item.title}</span>

                        </li>;
                    })}

                </ul>
                {/* <div className="bottom-nav">
              <li onClick={() => alert("Not Available!")}>
                  {signout}
                  <span> &nbsp; Sign out</span>
              </li>
          </div> */}

            </NavStyled></>
    )
}

const NavStyled = styled.nav`
    padding: 1rem 1.5rem;      
    width: 20%;
    color: white;
   
    // Gradient Color
    background: hsla(239, 94%, 14%, 1);
    background: linear-gradient(90deg, hsla(239, 94%, 14%, 1) 0%, hsla(190, 68%, 50%, 1) 100%);
    background: -moz-linear-gradient(90deg, hsla(239, 94%, 14%, 1) 0%, hsla(190, 68%, 50%, 1) 100%);
    background: -webkit-linear-gradient(90deg, hsla(239, 94%, 14%, 1) 0%, hsla(190, 68%, 50%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#020344", endColorstr="#28b8d5", GradientType=1 );    backdrop-filter: blur(4.5px);
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 1100px) {
        margin-top: 0;
        margin-bottom: 1.5rem;
        height: 5rem;
        width: 100%;
        
    }

    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
             
        @media (max-width: 1100px){
            display: block;
            width: 10rem;
            position: absolute;
            top: 1.2rem;
            
            img, p, h2{
                display: none;
            }

        }

        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid black;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
       
        p{
            color: rgb(220,220,220) ; 
        }
    }

    ${'' /* .bottom-nav{
        color: black;
        cursor: pointer;
        margin: .6rem;

    } */}

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;

        @media (max-width: 1100px){ 
            padding: 0 1rem 0 .5rem;
            flex-direction: row;
            justify-content: space-between;
            
          .item{
            display: none;
          }
        
        }

        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            padding-left: 1rem;
            position: relative;
            i{
                color: black;
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }

        @media (max-width: 1100px){
            &::before{
               top: .5rem;
               width: .5rem;
               height: .5rem;
               border-radius: 50%;
               
            }

        }
    }


`;

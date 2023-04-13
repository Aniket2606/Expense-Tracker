import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import about from '../img/about.png';
import { mail, fb } from "../utils/Icons"

function About() {
  return (
  <AboutStyled>
       <InnerLayout>
                   <h1 className="abt"> About </h1>

                <div className='brand'>
                  <img src= {about} alt=""/>

                  <div className="title">
                    <h1>FinTrackr</h1>
                    <p>"Tracking expense made easy"</p>
                  </div>

                  <div className="description">
                    <p>FinTrackr is a expense manager and spending tracker website that will help us to manage our 
                    own personal finances with ease. Imagine it as a digital financial notebook in which we can 
                    track our all income and expenses. It tracks our income and expenses by chart so we can see our budget quickly 
                    and make suitable financial decisions.</p>

                  </div>

                  <div className="contact">
                    <h1>Contact us </h1>
                    <p>{mail} fintrackr26@gmail.com {fb}</p>
                  </div>

                  <footer>
                  <p>© Copyright 2023 FinTrackr</p>
                  </footer>
                </div>
 
       </InnerLayout>
  </AboutStyled>
  )
}


const AboutStyled = styled.div`
    @media (max-width: 1100px){
    .abt{
         color:white;
         font-size: 4rem;
         text-align: center;
      }
     .brand{
      margin: 5rem 5rem;
     }
      .title{
        padding-top: 2rem;
        h1{
          font-size: 8.5rem !important;
        }
          p{
            font-size: 2.3rem !important ;
          }
        }
      
      .description{
        padding-top: 6% !important;
        font-size: 2.6rem !important;
      }
  
      .contact{
        h1{
          margin-top:2.5rem;
          font-size: 3.5rem !important;
        }
          p,i{
            padding-top: 1.5% !important;
            font-size: 2.4rem !important;
          }
        }

        footer{
          padding-top: 4rem !important;
          font-size: 2rem !important;
        }
      }
    




    .brand {
      padding: 1% 2%;
      text-align: center;
      img{
        height: 20%;
        width: 20%
      }
      .title{
          color: white;
        h1{
          font-size: 4.6rem;
        } 
          p{
            font-size: 1.7rem;
          }
        } 
      }
      .description{
        text-align: justify;
        padding-top: 2% ;
        font-size: 1.4rem;
      }
      .contact{
        padding-top: 2.5%;
        ${'' /* text-align: justify; */}
        h1{
          -webkit-text-stroke: .5px black;
          color:white;
        }
        p,i{
          padding: .2% .1%;
          font-size:1.6rem;
        }
      }
      footer{
        padding-top: 6%;
        color: white;
        font-size: 1.3rem;
      }
    }
`;




export default About


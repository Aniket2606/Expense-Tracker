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
                    <p>FinTrackr is an expense tracker that helps you to manage your personal finances with ease. 
                    Imagine it as a digital financial notebook in which you can track all your income and expenses. 
                    It tracks your income and expenses by chart so that you can see your budget quickly and make suitable financial decisions accordingly.</p>


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
         font-size: 3rem;
         text-align: center;
      }
     .brand{
         margin: 2rem 1rem;

      img{
        height: 14rem !important;
        width: 14rem !important;
      }
     }
      .title{
        padding-top: 2rem;
        h1{
          font-size: 3.8rem !important;
        }
          p{
            font-size: 1.4rem !important ;
          }
        }
      
      .description{
        padding-top: 6% !important;
        font-size: .9rem !important;
      }
  
      .contact{
        h1{
          margin-top: 2rem;
          font-size: 1.8rem !important;
        }
          p,i{
            padding-top: 1.5% !important;
            font-size: .8rem !important;
          }
        }

        footer{
          padding-top: 2rem !important;
          font-size: .6rem !important;
        }
      }
    




    .brand {
      padding: 1% 2%;
      text-align: center;
      img{
        height: 18%;
        width: 18%
      }
      .title{
        h1{
          font-size: 4rem;
        } 
          p{
            font-size: 1.5rem;
          }
        } 
      }
      .description{
        text-align: justify;
        padding-top: 2% ;
        font-size: 1.2rem;
      }
      .contact{
        padding-top: 5%;
        ${'' /* text-align: justify; */}
        h1{
          -webkit-text-stroke: .8px black;
          color:white;
        }
        p,i{
          padding: .2% .1%;
          font-size:1.3rem;
        }
      }
      footer{
        padding-top: 1%;
        color: grey;
        font-size: 1rem;
      }
    }
`;




export default About


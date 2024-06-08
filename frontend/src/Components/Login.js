import React, { useState } from 'react';
import auth from '../img/auth.png';
import styled from 'styled-components';

const Login = ({ handleLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    if (password === '017135') {
      handleLogin();
    } else {
      setError('Invalid Code!');
    }
  };

  return (
    <LoginStyled>
      <form onSubmit={loginHandler}>
        <h2>Welcome Aniket!</h2>
        
        <div className='auth'>
             <img src={auth} alt="auth" />
        </div>
        <input
          type="password"
          placeholder="Security Code"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Track Expense</button>
        {error && <p className="error">{error}</p>}
      </form>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
    

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  display: flex;


   background: hsla(239, 94%, 14%, 1);
    background: linear-gradient(90deg, hsla(239, 94%, 14%, 1) 0%, hsla(190, 68%, 50%, 1) 100%);
    background: -moz-linear-gradient(90deg, hsla(239, 94%, 14%, 1) 0%, hsla(190, 68%, 50%, 1) 100%);
    background: -webkit-linear-gradient(90deg, hsla(239, 94%, 14%, 1) 0%, hsla(190, 68%, 50%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#020344", endColorstr="#28b8d5", GradientType=1 );   

    
  form {
    height: 28rem;
    width: 22rem;
    background: white;
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 
    .auth{
      text-align:center;

    img{
       height: 15rem;
       width: 16rem;
    }
    }
    h2 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    .error {
      font-weight: 500;
      color: red;
      margin-top: .5rem;
      text-align: center;
    }

    input { 
      display: block;
      width: 100%;
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ddd;
    }

    button {
      display: block;
      width: 100%;
      padding: 0.5rem;
      border: none;
      background: rgb(0, 200, 0)  ;
      color: white;
      cursor: pointer;
    }
     button:hover{
     background: rgb(0, 163, 108);
     }
  }
`;

export default Login;

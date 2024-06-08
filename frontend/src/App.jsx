// App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from "./Components/Navigation";
import { MainLayout } from "./styles/Layouts";
import Dashboard from './Components/Dashboard';
import Income from './Components/Income';
import Expenses from './Components/Expenses';
import Transview from './Components/Transview';
import About from './Components/About';
import Login from './Components/Login';

function App() {
  const [active, setActive] = useState(1);
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transview />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      case 5:
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyled className="App">
      {authenticated ? (
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>
            {displayData()}
          </main>
        </MainLayout>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: rgb(242,242,242);
  position: relative;

  @media (max-width: 1100px){
    overflow: scroll;
    main{
      height: 1800px;
    }
  }
  main{
    flex: 1;
    background: rgb(242,242,242);
    backdrop-filter: blur(4.5px);
    overflow-x: hidden;
    &::-webkit-scrollbar{  
      width: 0;
    }
  }
`;

export default App;

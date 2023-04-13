import React, {useState} from 'react'
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import { MainLayout }from "./styles/Layouts";
import Dashboard from './Components/Dashboard';
import Income from './Components/Income';
import Expenses from './Components/Expenses';
import Transview from './Components/Transview';
import About from './Components/About.js';
import { useGlobalContext } from './context/globalContext';



function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transview />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      case 5: 
        return <About />
      default: 
        return <Dashboard />
    }
  }



  return (
    <AppStyled className="App">
      <MainLayout>   
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
   height: 100vh;
   background-color: #FEE7E4;
   position: relative;

   @media (max-width: 1100px){
    overflow: scroll;
     main{
      height: 2200px;
     }
   }
  main{
    flex: 1;
    background: #FC8778;
    border: 4px solid black;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{  
      width: 0;
    }
  }

`;
export default App;

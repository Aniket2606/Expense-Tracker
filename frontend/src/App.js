import React, {useState} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import Navigation from "./Components/Navigation";
import { MainLayout } from "./styles/Layouts";
import Dashboard from './Components/Dashboard';
import Income from './Components/Income';
import Expenses from './Components/Expenses';


function App() {
  const [active, setActive] = useState(1)



  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  return (
    <AppStyled bg={bg} className="App">
      
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
  background-image: url(${props => props.bg});
  position: relative;
  
  main{
    flex: 1;
    background: #537fe7;
    border: 3px solid #95bdff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
  
`;
export default App;

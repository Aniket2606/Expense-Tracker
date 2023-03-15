import styled from "styled-components";
import bg from './img/bg.png'
import Navigation from "./Components/Navigation";

import { MainLayout } from "./styles/Layouts";


function App() {
  return (
    <AppStyled bg={bg} className="App">
      
      <MainLayout>   
        <Navigation></Navigation>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
   height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;

  
`;
export default App;

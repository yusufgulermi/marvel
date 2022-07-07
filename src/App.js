import CharacterDetails from "./component/CharacterDetails/CharacterDetails";
import AllCharacters from './component/AllCharacter/AllCharacters';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Container } from "@mui/material";


function App() {

  const pageCount = useSelector(state => state.pageCount.value);
  return (
    <Router >
      <Container>
      
          <Routes>
            
            <Route exact path='/marvel' element={<AllCharacters offset={pageCount} />}></Route>

            <Route path="/:id" element={<CharacterDetails />}></Route>
          </Routes>
      

      </Container >
    </Router>
  );

}

export default App;

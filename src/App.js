import './App.css';
import SignUp from './Components/SignUp';
import Verify from './Components/Verify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SignUp />}></Route>
          <Route exact path='/verify' element={<Verify/>}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;

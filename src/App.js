import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from './routes/Home';
import Login from './routes/Login';
import Data from './routes/Data';
import Register from './routes/Register';

function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
   </Router>
  );
}

export default App;


import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
       
      

      </Routes>
     
       
      
       {/* <Login /> */}
       {/* <Register /> */}
    </div>
  );
}
export default App;

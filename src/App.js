import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes} from 'react-router';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Deshboard from './components/Deshboard'
import { useState } from 'react';
import PrivateRoute from "./components/PrivateRoute"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-black flex flex-col">

    <div>

        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="deshboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}><Deshboard/></PrivateRoute>
        }/>

        </Routes>

    </div>
      
    </div>
  );
}

export default App;

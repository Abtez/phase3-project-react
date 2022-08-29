import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Post from './components/Post';
import {Routes, Route} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))


  const [magazines, setMagazines] = useState([])
  
  const url = "http://localhost:9292/magazines"

  useEffect(() => {
    if (currentUser) {
      setLoggedIn(true)
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setMagazines(data))   
  }, [])

  function isLoggedOut(){
    setLoggedIn(loggedIn => false)
    localStorage.clear()
    window.location.reload()
  }


  function addMagazine(mag){
    console.log(mag);
    setMagazines([...magazines, mag])
  }
  
  return (
    <div className="App">
      <Nav loggedIn={loggedIn} isLoggedOut={isLoggedOut} />
      <Routes>
        <Route exact path='/' element={<Home magazines={magazines} />} />
        <Route exact path='/register' element={<Register />} loggedIn={loggedIn} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/new-magazine' element={loggedIn ? <Post /> : <Login />} addMagazine={addMagazine} />
      </Routes>
    </div>
  );
}

export default App;

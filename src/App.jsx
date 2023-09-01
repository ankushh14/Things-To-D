import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';

const App = () => {
  return (
    <> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/todo' element= {<Todo/>}/>
      <Route path='/auth/signup' element={<Signup/>}></Route>
      <Route path='/auth/login' element={<Login/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
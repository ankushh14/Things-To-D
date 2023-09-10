import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Users from './pages/Users';
import ProtectedRoute from '../util/ProtectedRoute';
import AdminRoute from '../util/AdminRoute';


const App = () => {
  return (
    <> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth/signup' element={<Signup/>}/>
      <Route path='/auth/login' element={<Login/>}/>
      <Route element = {<ProtectedRoute/>}>
        <Route path='/todo' element= {<Todo/>}/>
      </Route>
      <Route element={<AdminRoute/>}>
        <Route path='/users' element={<Users/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import PrivateRouter from './route/PrivateRouter';
import Footer from './component/Footer';

function App() {
  let [authenticate, setAuthenticate]=useState(false)

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/shoppingmall' element={<ProductAll/>}/>
        <Route path='/' element={<ProductAll/>}/>
        <Route 
        path='/login' 
        element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route 
        path='/product/:id'
         element={<PrivateRouter authenticate={authenticate}/>}
        />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;

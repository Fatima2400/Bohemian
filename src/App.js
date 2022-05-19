

import './App.css';
import {Routes, Route} from 'react-router-dom'

import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Arrival} from './components/newArrival';
import { Fashion } from './components/fashion';
import { Homeware} from './components/homeware';
import { Details } from "./components/productDetail";
import { HomeDetails } from "./components/homewareDetails";
import { FashionDetails } from "./components/fashionDetails";
import {Cart} from './components/cart'
import {Checkout} from './components/checkout'
import { Payment } from './components/payment';

function App() {
  return (
    <>
    <Navbar/>
   <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='arrival' element={<Arrival/>}></Route>
      <Route path='fashion' element={<Fashion/>}></Route>
      <Route path='homeware' element={<Homeware/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/detail/:id' element={<Details/>}/>
      <Route path='/homedetail/:id' element={<HomeDetails/>}/>
      <Route path='/fashiondetail/:id' element={<FashionDetails/>}/>
    </Routes>

    
    </>
  );
}

export default App;

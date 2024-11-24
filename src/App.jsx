import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';


import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Router} from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Help from './pages/Help';
import Layout from './components/Layout';
let multipge = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/help' element={<Help/>}></Route>
  </Route>
))
function App() {

  return (
    <>
      <RouterProvider router={multipge}/>
    </>
  )
}

export default App

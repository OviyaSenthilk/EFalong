import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage,SignupPage,Home, CreateProduct,MyProducts,Cart, ProductDetails,Profile, CreateAddress, SelectAddress, OrderConfirmation} from "./routes/routes";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ='/login' element={<LoginPage/>}/>
        <Route path ='/signup' element={<SignupPage/>}/>
        <Route path ='/createproduct' element={<CreateProduct/>}/>
        <Route path="/myproducts" element={<MyProducts/>} />
        <Route path="/create-product/:id" element={<CreateProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/create-address"element={<CreateAddress/>}></Route>
        <Route path="/select-address"element={<SelectAddress/>}></Route>
        <Route path="/order-confirmation"element={<OrderConfirmation/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

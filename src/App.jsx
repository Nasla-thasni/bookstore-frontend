import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Login from "./pages/user/Login";
import Books from "./pages/user/Books";
import BookDetails from "./pages/user/BookDetails";
import Admindashboard from "./Components/admin/Admindashboard";
import Viewbooks from "./pages/admin/Viewbooks";
import Addbook from "./pages/admin/Addbooks";
import Editbooks from "./pages/admin/Editbooks";
import Addbooks from "./pages/admin/Addbooks";
import Cart from "./pages/user/Cart";


const App = () => {
  return (
    <>

    <BrowserRouter>
   

      <Routes>
         
       <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/books" element={<Books/>}/>
        <Route path="/books/:id" element={<BookDetails/>} />
        <Route path="/admin" element={<Admindashboard/>}/> 
        <Route path="/viewbook" element={<Viewbooks/>}/>
        <Route path="/addbook" element={<Addbooks/>}/>
        <Route path="/editbook/:id" element={<Editbooks/>}/>
        <Route path="/cart" element={<Cart/>}/>




      </Routes>
     
    </BrowserRouter>

      
    </>
  );
};

export default App;

import React from "react";
import { Routes, Route,} from "react-router-dom";
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home";
import Cart from "./pages/Cart";



function App() {
  const[searcValue, setSearchValue] = React.useState('')
    
  
return (
    <div className="wrapper">
      
     <Header searcValue={searcValue} setSearchValue={setSearchValue}/>

     <div class="content">
        <div class="container">
          <Routes>
            <Route path="/" element={<Home searcValue={searcValue} setSearchValue={setSearchValue}/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;

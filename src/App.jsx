import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Product, { WatchProduct,MobileProduct } from "./pages/Product"

function App(){
    return(
        <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/product/mobiles" element={<MobileProduct/>}/>
                <Route path="/product/watches" element={<WatchProduct/>}/>    

            </Routes>
        </BrowserRouter>

        </>
    )
}

export default App
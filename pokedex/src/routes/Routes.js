import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from '../pages/pokedex/Pokedex'
import Home from '../pages/home/Home'
import Error from '../pages/error/Error'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/Pokedex" element={<Pokedex/>}/>
            
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
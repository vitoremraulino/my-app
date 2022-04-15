
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../presentation/views/Home'
import About from '../../presentation/views/About'

import NavbarApp from "../../presentation/components/NavbarApp";

function Rotas() {
    return (
        <> 
            <BrowserRouter>
                <NavbarApp />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Rotas;
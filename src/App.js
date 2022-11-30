import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
				<Routes>
					<Route path='/' element={<Home />} />  
                    <Route path='/joke/:category/:id/' element={<Detail />} />  
				</Routes>
            </BrowserRouter>
        </>
    ); 
}

export default App;

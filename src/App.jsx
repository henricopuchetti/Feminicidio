import Home from "./pages/Home";
import Contato from "./pages/Contato";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sobre from "./pages/Sobre";

function App(){
return(
<div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contato" element={<Contato/>}/>
    <Route path="/sobre" element={<Sobre/>}/>
  </Routes>
  </BrowserRouter>
 </div>
)
}
export default App
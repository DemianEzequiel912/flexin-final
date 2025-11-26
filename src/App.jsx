import { HashRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Tienda from "./pages/Tienda";
import Nosotros from "./pages/Nosotros";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";
import ProductoDetalle from "./pages/ProductoDetalle";
import Footer from "./components/Footer";
import NoEncontrado from "./pages/NoEncontrado";


import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  return (
    <div className="layout-wrapper"> 
      <HashRouter>
        <Navbar />

        <main className="content-wrapper"> 
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/producto/:id" element={<ProductoDetalle />} />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        </main>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

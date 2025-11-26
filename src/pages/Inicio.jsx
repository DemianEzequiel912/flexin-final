import Hero from "../components/Hero";
import Seccion from "../components/Seccion";
import Productos from "../components/Productos";


import bolsas2 from "../assets/bolsas2.jpg";
import bolsas3 from "../assets/bolsas3.jpg";

export default function Inicio() {
    return (
        <>
            <Hero />

            <Seccion
                fondo={bolsas2}
                titulo="Compromiso ecológico"
                texto="Nuestras bolsas están hechas con materiales reutilizables y resistentes."
            />

            <Seccion
                fondo={bolsas3}
                titulo="Diseño y estilo"
                texto="Modelos modernos, resistentes y ecológicos."
            />

            <Productos />

    
        </>
    );
}

import fondoDefault from "../assets/fondoPrincipal2.jpg";

export default function Seccion({ fondo, titulo, texto }) {
    const imagenFondo = fondo || fondoDefault;

    return (
        <section
            className="seccion-fondo"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${imagenFondo})`,
            }}
        >
            <div className="seccion-contenedor">
                <h2 className="fw-bold mb-3">{titulo}</h2>
                <p>{texto}</p>
            </div>
        </section>
    );
}

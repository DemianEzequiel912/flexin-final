import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductoDetalle() {
    const { id } = useParams();

    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ruta = import.meta.env.BASE_URL + "productos.json";

        fetch(ruta)
            .then((res) => {
                if (!res.ok) throw new Error("Error al cargar detalles");
                return res.json();
            })
            .then((data) => {
                const encontrado = data.find(p => p.id === Number(id));

                if (!encontrado) {
                    setError("Producto no encontrado");
                } else {
                    encontrado.imagen = import.meta.env.BASE_URL + encontrado.imagen;
                    setProducto(encontrado);
                }
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <p className="text-center mt-5">Cargando producto...</p>;
    }

    if (error) {
        return <p className="text-center mt-5 text-danger">{error}</p>;
    }

    return (
        <div
            className="container"
            style={{
                paddingTop: "120px",
                paddingBottom: "140px",
                maxWidth: "550px",
                margin: "0 auto",
            }}
        >
            <Link to="/tienda" className="btn btn-secondary mb-4 fw-bold px-4">
                ← Volver
            </Link>

            <div
                className="text-center"
                style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "18px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                }}
            >
                <img
                    src={producto.imagen}
                    alt={producto.titulo}
                    style={{
                        width: "100%",
                        maxWidth: "240px",
                        borderRadius: "15px",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                        marginBottom: "20px",
                    }}
                />

                <h2 className="fw-bold mb-3">{producto.titulo}</h2>

                <p style={{ fontSize: "1.1rem", marginBottom: "0" }}>
                    {producto.info}
                </p>
            </div>
        </div>
    );
}

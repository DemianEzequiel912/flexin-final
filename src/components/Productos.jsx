import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Productos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ruta = import.meta.env.BASE_URL + "productos.json";

        fetch(ruta)
            .then((res) => {
                if (!res.ok) throw new Error("Error al cargar productos");
                return res.json();
            })
            .then((data) => {
                const lista = data.map((p) => ({
                    ...p,
                    imagen: import.meta.env.BASE_URL + p.imagen
                }));

                setProductos(lista);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center mt-5">Cargando productos...</p>;
    }

    if (error) {
        return <p className="text-center mt-5 text-danger">{error}</p>;
    }

    return (
        <section
            id="productos"
            className="container"
            style={{
                paddingTop: "140px",
                paddingBottom: "180px",
            }}
        >
            <h2 className="text-center fw-bold mb-5">Nuestras Bolsas</h2>

            <div className="row justify-content-center">
                {productos.map((producto) => (
                    <div
                        key={producto.id}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
                    >
                        <div
                            className="card h-100"
                            style={{
                                width: "240px",
                                borderRadius: "18px",
                                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={producto.imagen}
                                alt={producto.titulo}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />

                            <div className="card-body text-center">
                                <h5 className="fw-semibold" style={{ fontSize: "1rem" }}>
                                    {producto.titulo}
                                </h5>

                                <Link
                                    to={`/producto/${producto.id}`}
                                    className="btn btn-outline-success rounded-pill px-4 mt-2"
                                >
                                    Ver más
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tienda() {
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
                    imagen: import.meta.env.BASE_URL + p.imagen,
                }));
                setProductos(lista);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p className="text-center mt-5">Cargando productos...</p>;
    }

    if (error) {
        return <p className="text-center mt-5 text-danger">{error}</p>;
    }

    return (
        <div 
            style={{ 
                width: "100%",
                paddingTop: "100px" 
            }}
        >
            <h2 className="text-center fw-bold mb-5">Nuestras Bolsas</h2>

            <div 
                className="row g-4 justify-content-center"
                style={{ 
                    margin: "0 auto",
                    maxWidth: "1400px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                }}
            >
                {productos.map((p) => (
                    <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">

                        <div 
                            className="card h-100 shadow border-0 mx-auto"
                            style={{ 
                                maxWidth: "300px",
                                borderRadius: "15px",
                            }}
                        >
                            <img
                                src={p.imagen}
                                alt={p.titulo}
                                className="card-img-top"
                                style={{
                                    height: "250px",
                                    objectFit: "cover",
                                    borderTopLeftRadius: "15px",
                                    borderTopRightRadius: "15px"
                                }}
                            />

                            <div className="card-body text-center">
                                <h5 
                                    className="fw-semibold mb-3"
                                    style={{ minHeight: "50px" }}
                                >
                                    {p.titulo}
                                </h5>

                                <Link 
                                    to={`/producto/${p.id}`} 
                                    className="btn btn-outline-success rounded-pill px-4"
                                >
                                    Ver más
                                </Link>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

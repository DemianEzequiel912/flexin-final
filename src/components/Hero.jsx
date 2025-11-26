import fondo from "../assets/fondoPrincipal.jpg";

export default function Hero() {

    const scrollToProductos = () => {
        const section = document.getElementById("productos");

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            className="d-flex flex-column justify-content-center align-items-center text-center text-dark"
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${fondo})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                width: "100vw",
                minHeight: "100vh",
                margin: "0",
                paddingTop: "90px",
                overflowX: "hidden",
            }}
        >
            <div
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    padding: "3rem",
                    borderRadius: "20px",
                    backdropFilter: "blur(6px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
            >
                <h1
                    className="display-2 fw-bold"
                    style={{ fontFamily: "'Poppins', sans-serif", color: "#333" }}
                >
                    Flexin
                </h1>

                <p
                    className="lead mt-3"
                    style={{
                        fontSize: "1.4rem",
                        color: "#333",
                        maxWidth: "600px",
                        margin: "0 auto",
                    }}
                >
                    Bolsas reutilizables con diseño, color y conciencia ecológica.
                </p>


                <button 
                    onClick={scrollToProductos}
                    className="btn btn-warning btn-lg mt-4 shadow-sm"
                >
                    Ver Productos
                </button>
            </div>
        </section>
    );
}

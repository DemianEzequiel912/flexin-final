import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            id="navbar"   // 👈🔥 AGREGADO PARA QUE PRODUCToS PUEDA MEDIRLO
            className="navbar navbar-expand-lg fixed-top"
            style={{
                transition: "0.5s",
                backgroundColor: scrolled
                    ? "rgba(188, 228, 222, 0.95)"
                    : "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                boxShadow: scrolled ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
            }}
        >
            <div
                className="container-fluid px-4"
                style={{ maxWidth: "1300px", margin: "0 auto" }}
            >

                {/* LOGO */}
                <Link to="/" className="navbar-brand">
                    <img
                        src={logo}
                        alt="Flexin logo"
                        style={{
                            height: scrolled ? "50px" : "60px",
                            borderRadius: "10px",
                            transition: "0.3s",
                        }}
                    />
                </Link>

                {/* BOTÓN HAMBURGUESA */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* LINKS */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-3 align-items-lg-center">

                        <li className="nav-item">
                            <Link to="/" className="nav-link fw-semibold text-dark">
                                Inicio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/tienda" className="nav-link fw-semibold text-dark">
                                Productos
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/nosotros" className="nav-link fw-semibold text-dark">
                                Nosotros
                            </Link>
                        </li>

                        <li className="nav-item mb-2 mb-lg-0">
                            <Link to="/contacto" className="nav-link fw-semibold text-dark">
                                Contacto
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

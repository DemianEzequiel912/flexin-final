import { useState } from "react";

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // URL dinámica para Gmail
    const gmailURL =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=flexincontacto@gmail.com" +
        `&su=${encodeURIComponent("Consulta desde la web Flexin")}` +
        `&body=${encodeURIComponent(
            `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nAsunto: ${formData.asunto}\n\nMensaje:\n${formData.mensaje}`
        )}`;

    return (
        <div 
            style={{
                paddingTop: "150px",
                paddingBottom: "80px",
                background: "linear-gradient(135deg, #eaf7f5, #ffffff)",
                minHeight: "100vh"
            }}
        >
            <div className="container" style={{ maxWidth: "900px" }}>
                
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: "2.3rem" }}>
                    Contacto
                </h2>

                <p className="text-center mb-5 fs-5">
                    En Flexin podés comunicarte con nosotros de manera rápida. 
                    Completá el formulario o escribinos por nuestras redes.
                </p>

                {/* FORMULARIO */}
                <div 
                    className="p-4 shadow rounded mb-5"
                    style={{ background: "white", borderRadius: "15px" }}
                >
                    <div className="row g-3">

                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Nombre</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Correo electrónico</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Teléfono</label>
                            <input 
                                type="tel" 
                                className="form-control" 
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Asunto</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="asunto"
                                value={formData.asunto}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label fw-semibold">Mensaje</label>
                            <textarea 
                                className="form-control" 
                                rows="5"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-success w-100 rounded-pill mt-3 fs-5">
                                Enviar mensaje
                            </button>
                        </div>

                    </div>
                </div>

                {/* UBICACIÓN */}
                <h4 className="fw-bold text-center mb-3">Ubicación</h4>

                <div 
                    className="rounded shadow mb-5" 
                    style={{ overflow: "hidden", borderRadius: "15px" }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.2088701589114!2d-58.61918741842277!3d-34.564647703269046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb96280b6ece1%3A0x2c8ef52b77b2a7e!2sChurruca%209971%2C%20B1657AGK%20Loma%20Hermosa%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses!2sar!4v1762988065410!5m2!1ses!2sar"
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* REDES */}
                <div className="text-center">
                    <h4 className="fw-bold mb-4">También podés escribirnos por:</h4>

                    <div className="d-flex justify-content-center gap-4">

                        {/* WhatsApp */}
                        <a 
                            href="https://wa.me/5491134567890"
                            target="_blank"
                        >
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                alt="WhatsApp" 
                                style={{ width: "55px" }}
                            />
                        </a>

                        {/* Instagram */}
                        <a 
                            href="https://instagram.com/tuinstagram"
                            target="_blank"
                        >
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                alt="Instagram" 
                                style={{ width: "55px", borderRadius: "12px" }}
                            />
                        </a>

                        {/* Email — GMAIL PRE-CARGADO */}
                        <a 
                            href={gmailURL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                                alt="Email" 
                                style={{ width: "55px" }}
                            />
                        </a>

                    </div>
                </div>

            </div>
        </div>
    );
}

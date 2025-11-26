export default function Nosotros() {
    return (
        <div 
            style={{
                background: "linear-gradient(135deg, #d4f1ef, #e9f7f6, #ffffff)",
                minHeight: "100vh",
                paddingTop: "160px",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "60px"
            }}
        >
            <section 
                className="container py-5" 
                style={{ maxWidth: "900px" }}
            >
                
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: "2.2rem" }}>
                    Sobre Nosotros
                </h2>

                <p className="text-center fs-5 mb-4" style={{ lineHeight: "1.7" }}>
                    En <strong>Flexin</strong> fabricamos bolsas ecológicas resistentes, 
                    con estilo y compromiso con el medio ambiente. 
                    Nuestro objetivo es acompañar tu emprendimiento o negocio 
                    con productos duraderos, prácticos y diseñados con pasión.
                </p>

                <div 
                    className="shadow p-4 rounded"
                    style={{ 
                        background: "white", 
                        borderRadius: "15px",
                        lineHeight: "1.7"
                    }}
                >
                    <h4 className="fw-bold mb-3 text-center">¿Qué hacemos?</h4>
                    <p>
                        • Diseñamos y producimos bolsas reutilizables de alta calidad.<br/>
                        • Trabajamos con materiales resistentes y amigables con el planeta.<br/>
                        • Realizamos diseños personalizados para marcas, eventos y negocios.<br/>
                        • Ofrecemos modelos variados para distintos usos, gustos y necesidades.
                    </p>

                    <h4 className="fw-bold mt-4 mb-3 text-center">Nuestra misión</h4>
                    <p>
                        Reducir el impacto ambiental promoviendo el uso de productos que se 
                        puedan reutilizar cientos de veces. Cada bolsa Flexin está pensada 
                        para durar, ser funcional y transmitir identidad.
                    </p>

                    <h4 className="fw-bold mt-4 mb-3 text-center">Por qué elegirnos</h4>
                    <p>
                        ✔ Calidad comprobada en cada producto.<br/>
                        ✔ Diseños únicos y modernos.<br/>
                        ✔ Atención personalizada.<br/>
                        ✔ Precios accesibles para emprendedores.<br/>
                        ✔ Compromiso con el medio ambiente.
                    </p>
                </div>

            </section>
        </div>
    );
}

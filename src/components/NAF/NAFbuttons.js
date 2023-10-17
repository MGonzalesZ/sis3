import './NAFstyle.css';

export function NAFbuttons() {
    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Servicios</h1>
            <div className="row">
                <button className="full-height">Atención al Contribuyente</button>
                <button className="full-height">RE-IVA</button>
                <button className="full-height">Formulario 110</button>
            </div>
            <div className="row">
                <button className="full-height">Emisión de Facturas</button>
                <button className="full-height">Facilidades de Pago</button>
            </div>
        </div>
    );
}
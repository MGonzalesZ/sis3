import './index.css'

export function InfoCard({ titulo, descripcion, icond }) {
  return (
    <div className="card" style={{ justifyContent: 'space-between' }}>
      <div className="card-body d-flex flex-wrap align-items-center">
        {' '}
        {/* Utiliza flexbox y flex-wrap para alinear y envolver elementos */}
        <div
          className="flex-shrink-0"
          style={{ marginRight: '10px', width: '20%', height: 'auto' }}
        >
          {' '}
          {/* Estilo para el ícono */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={icond} />
          </svg>
        </div>
        <div>
          <h2 className="card-title">{titulo}</h2>
          <h4 className="card-text">{descripcion}</h4>
        </div>
      </div>
    </div>
  );
}

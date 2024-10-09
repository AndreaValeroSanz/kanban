
/* eslint-disable react/prop-types */
function Leyenda(props) {
  // eslint-disable-next-line react/prop-types
  const { name, color } = props;
  return (
    /* botón,  circulo y tres puntos */
    <div className="button-container py-1">
      <li className="px-2 d-flex">
          <i
            className="bi bi-circle-fill pe-2 pt-1"
            style={{ color: `var(--${color})` }}
          />
          {name}

      </li>
    </div>
  );
}

export default Leyenda;

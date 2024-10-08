import "./ProjectItem.css";
/* eslint-disable react/prop-types */
function ProjectItem(props) {
  // eslint-disable-next-line react/prop-types
  const { name, color } = props;
  return (
    /* botón,  circulo y tres puntos */
    <div className="button-container py-1">
      <li>
        <button type="button" className="btn boton">
          <i
            className="bi bi-circle-fill pe-2"
            style={{ color: `var(--${color})` }}
          />
          {name}
        </button>
      </li>
    </div>
  );
}

export default ProjectItem;

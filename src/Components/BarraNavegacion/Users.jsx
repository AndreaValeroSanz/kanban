function users() {
  return (
    <div>
      {/* botón de usuario */}
      <button type="button" className="btn d-flex align-items-center p-0">
        <span>UserName</span>
        <span className="px-3">
          {/* icono de usuario */}
          <i className="bi bi-person"></i>
        </span>
      </button>
    </div>
  );
}

export default users;

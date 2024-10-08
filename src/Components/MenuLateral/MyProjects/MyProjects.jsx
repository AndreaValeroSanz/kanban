import ProjectContainer from "./ProjectContainer/ProjectContainer";
function MyProjects() {
  return (
    //botón cruz y alineación
    <>
      <div className="d-flex justify-content-between align-items-around">
        <h3>My Projects</h3>
        <button type=" button" className="btn ">
          <i className="bi bi-plus-square"></i>
        </button>
      </div>

      <ProjectContainer />
    </>
  );
}

export default MyProjects;

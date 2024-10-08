import ProjectItem from "./ProjectItem/ProjectItem";

function ProjectContainer() {
  return (
    // array de proyectos
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      <ProjectItem name="MobileApp" color= "green"/>
      <ProjectItem name="WebsiteRedesign" color= "yellow" />
      <ProjectItem name="MobileApp2" color= "pink" />
      <ProjectItem name="Wireframes" color= "blue" />
    </ul>
  );
}
export default ProjectContainer;

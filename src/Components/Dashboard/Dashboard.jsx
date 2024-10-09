import Titulo from "./Header/Titulo";
import Leyenda from "./Header/Leyenda";
function Dashboard() {
  return (
    <div>
      <div className="row pt-5">
        <div className="col-lg-2">
          <Titulo />
        </div>
        <div className="col-lg-10 d-flex justify-content-end">
                invite

            <div/>
      </div>

      <div>
        <div className="">
          <ul
            className="d-flex justify-content-end"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            <Leyenda name="Tag" color="green" />
            <Leyenda name="Tag" color="yellow" />
            <Leyenda name="Tag" color="pink" />
            <Leyenda name="Tag" color="blue" />
          </ul>
        </div>
      </div>
    </div>
</div>
  );
}

export default Dashboard;

import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Nav from "./Nav";

const status = () => {
  return (
    <>
      <div className="bgcolor">
        <Nav />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className="container-fluid">
              <div className="row col">
                <div className="col-lg-3 ">
                  <h2>Order</h2>

                  <div className="list-decoration">#i982741</div>
                  <div className="list-decoration gray">#i982742</div>
                  <div className="list-decoration">#i982743</div>
                  <div className="list-decoration gray">#i982744</div>
                  <div className="list-decoration">#i982745</div>
                  <div className="list-decoration gray">#i982746</div>
                  <div className="list-decoration">#i982747</div>
                  <div className="list-decoration gray">#i982748</div>
                  <div className="list-decoration">#i982749</div>
                  <div className="list-decoration gray">#i982750</div>
                </div>

                <div className="col-lg-3">
                  <h2>Date</h2>
                  <div className="list-decoration">12/09/2023</div>
                  <div className="list-decoration gray">13/09/2023</div>
                  <div className="list-decoration">14/09/2023</div>
                  <div className="list-decoration gray">15/09/2023</div>
                  <div className="list-decoration">16/09/2023</div>
                  <div className="list-decoration gray">17/09/2023</div>
                  <div className="list-decoration">18/09/2023</div>
                  <div className="list-decoration gray">19/09/2023</div>
                  <div className="list-decoration">20/09/2023</div>
                  <div className="list-decoration gray">21/09/2023</div>
                </div>

                <div className="col-lg-3">
                  <h2>Status</h2>
                  <div className="list-decoration state2">Approved Level 1</div>
                  <div className="list-decoration state1">Approved level 2</div>
                  <div className="list-decoration state1">Approved level 2</div>
                  <div className="list-decoration state2">Approved Level 1</div>
                  <div className="list-decoration state1">Approved Level 2</div>
                  <div className="list-decoration state3">Rejected</div>
                  <div className="list-decoration state1">Approved Level 2</div>
                  <div className="list-decoration state3">Rejected</div>
                  <div className="list-decoration state3">Rejected</div>
                  <div className="list-decoration state1">Approved Level 2</div>
                </div>

                <div className="col-lg-3 ">
                  <h2>Quantity</h2>
                  <div className="list-decoration">20</div>
                  <div className="list-decoration gray">233</div>
                  <div className="list-decoration">32</div>
                  <div className="list-decoration gray">76</div>
                  <div className="list-decoration">177</div>
                  <div className="list-decoration gray">764</div>
                  <div className="list-decoration">67</div>
                  <div className="list-decoration gray">84</div>
                  <div className="list-decoration">89</div>
                  <div className="list-decoration gray">27</div>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default status;

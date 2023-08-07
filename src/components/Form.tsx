import Navbar from "./Navbar";
import Box from "@mui/material/Box";


const Form = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className="container-fluid form ">
        <div className="col">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Source Location
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose</option>
              <option>location 1</option>
              <option>location 2</option>
              <option>location 3</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Source Destinaton
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose</option>
              <option>location 1</option>
              <option>location 2</option>
              <option>location 3</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Destination Location
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose</option>
              <option>location 1</option>
              <option>location 2</option>
              <option>location 3</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Destinaton Department
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose</option>
              <option>location 1</option>
              <option>location 2</option>
              <option>location 3</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="Number" className="form-label">
              Quantity
            </label>
            <input type="Number" className="form-control" id="inputZip"></input>
          </div>
          <div className="col-12">
            <label htmlFor="textarea" className="form-label">
              Reason
            </label>
            <input
              type="textarea"
              className="form-control"
              id="inputText"
              placeholder=""
            ></input>
          </div>
          <div className="col-md-6 form-floating">
            <textarea
              className="form-control"
              placeholder="Remarks"
              id="floatingTextarea2"
            ></textarea>
            <label htmlFor="floatingTextarea2">Remarks</label>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              ></input>
              <label className="form-check-label" htmlFor="gridCheck">
                Confirm
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Request for Approval 1
            </button>
          </div>
        </form>
      </div>

      </div>
        </Box>
      </Box>



      
    </>
  );
};

export default Form;

import React from "react";

function Navbar() {
  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="container p-3">
          <div className="row" style={{ color: "rgba(180, 179, 179, 0.733)"}}>
            <div className="col-md-2">
              <h5>Layout 1</h5>
            </div>
            <div className="col-md-1 p-0 ">About</div>
            <div className="col-md-1 p-0 ">Services</div>
            <div className="col-md-1 p-0 ">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

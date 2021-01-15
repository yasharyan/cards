import React from "react";

function FirstView() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row align-items-baseline">
          <h1 className="col mb-0">
            Page Heading
            <span
              className="col"
              style={{ color: "rgba(180, 179, 179, 0.733)", fontSize: "22px" }}
            >
              Secondary Text
            </span>
          </h1>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default FirstView;

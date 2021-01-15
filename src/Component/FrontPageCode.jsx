import React from "react";
import { CgCloseR } from "react-icons/cg";

function Categories(props) {
  return (
    <div className="col mt-3 mb-3" >
      <CgCloseR
        size="35px"
        color="rgba(156, 2, 2, 0.733)"
        type="button"
        className="iconpositing"
        onClick={()=>props.delete(props.id)}
      />
      <img src={props.url} alt="common" className="col p-0" />
      <a href={props.thumbnailUrl}>
        <h3 className="mt-3">Project Name</h3>
      </a>
      <p style={{textTransform: "capitalize"}}>{props.title}</p>
    </div>
  );
}

export default Categories;

import React, { useState } from "react";
import "./../Style.css";
import Card from "./FrontPageCode";
import FrontPageData from "./FrontPageData";

function CategoriesCode() {
  const [data, setData] = useState(FrontPageData);

  const removePic = (id) => {
    setData(data.filter((pic) => pic.id !== id));
  };

  return (
    <React.Fragment>
      <div className="container mt-3 ">
        <div className="row">
          {data.map((val, ind) => {
            return (
              <div className="col-4 p-0 cardSize" key={ind}>
                <Card
                  id={val.id}
                  delete={removePic}
                  title={val.title}
                  url={val.url}
                  thumbnailUrl={val.thumbnailUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default CategoriesCode;

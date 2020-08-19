import React from "react";

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Data from "./data.json";

function Body(props) {
  return (
    <div>
      <div className="row mt-5">
        {Data.map((post) => {
          return (
            <div className="col-md-4">
              <p>{post.Name}</p>
              <img src={post.image}></img>
              <p>Rating:{post.Rating}</p>
              <p>Description:{post.Description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;

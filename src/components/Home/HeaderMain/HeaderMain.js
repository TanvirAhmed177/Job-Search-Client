import React from "react";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <main style={{ height: "300px" }} className="row d-flex align-items-center">
      <div className="col-md-12 col-sm-12 col-12   text-center">
        <h3 className="text-success">Find your next job, fast.</h3>
        <h3 className="text-light">
          Search by skills. View salaries. One-click apply.
        </h3>
      </div>
    </main>
  );
};

export default HeaderMain;

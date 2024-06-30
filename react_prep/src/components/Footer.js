import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button className="btn btn-danger col-2">Reset</button>
      <div className="col-8 bg-dark">{props.totalAmount}</div>
      <button className="btn btn-success col-2">Pay Now!</button>
    </div>
  );
}
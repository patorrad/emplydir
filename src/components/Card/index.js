import React from "react";
import "./style.css";

function Card(props) {

  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={props.employee.picture.medium} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Hi! I'm {props.employee.name.first}</h5>
              <p className="card-text">I currently live in {props.employee.location.city}. I have been with this company for {props.employee.registered.age}. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

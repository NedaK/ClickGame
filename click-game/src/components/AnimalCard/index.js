import React from "react";
import "./style.css";

function AnimalCard(props) {
  return (
     <div className = "container">
      {props.animals.map(object=> (
       <div className="card" key ={object.id}>
        <div className="img-container" id={object.id}
            onClick={() => props.handleSelected(object.id)}>
          <img alt={object.name} src={object.image} />
        </div>
        </div>
        ))}
        
    
      {/* <span className="remove" onClick={() => props.remove()}>𝘅</span> */}
      {/* Both of these ways work
      <span className="remove" onClick={() => props.remove(props.id)}>𝘅</span> */}

    </div>
  );
}

export default AnimalCard;

import React from "react";

function Cards(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>+123 456 789</p>
      <p>b@beyonce.com</p>
    </div>
  );
}

export default Cards;

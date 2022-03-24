import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Cards";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Yones"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+23445566"
      mail="her@email.com"
    />
    <Card
      name="Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+23445566"
      mail="her@email.com"
    />
    <Card
      name="Chakie"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+23445566"
      mail="her@email.com"
    />

    <h2>Jack Bauer</h2>
    <img
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
    />
    <p>+987 654 321</p>
    <p>jack@nowhere.com</p>

    <h2>Chuck Norris</h2>
    <img
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
    />
    <p>+918 372 574</p>
    <p>gmail@chucknorris.com</p>
  </div>,
  document.getElementById("root")
);

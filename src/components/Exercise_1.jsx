import React from "react";
import cat from "./../assets/cat.jpg";

function Exercise_1() {
  const el1 = React.createElement(
    "h1",
    {
      id: "head1",
      style: {
        color: "#e7e73e",
        background: "black",
      },
    },
    "Js React components headline"
  );

  const el2 = React.createElement(
    "p",
    { id: "par1", style: { fontWeight: "bold" } },
    "Js React components paragraph"
  );

  return (
    <div style={{ border: "1px solid  black" }}>
      {el1}
      {el2}
      <img src={cat} alt="cat" />
    </div>
  );
}

export default Exercise_1;

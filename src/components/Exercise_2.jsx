import cat from "./../assets/cat2.jpg";

function Exercise_2() {
  const divStyles = {
    border: "1px solid black",
  };
  return (
    <div style={divStyles}>
      <h1>JSX React components headline</h1>
      <p style={{ backgroundColor: "#a9c617" }}>
        Js React components paragraph
      </p>
      <img src={cat} alt="cat" />;
    </div>
  );
}

export default Exercise_2;

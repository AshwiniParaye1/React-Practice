import React from "react";
import "./App.css";
import img from "./assets/glass1.jpg";

const App = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div
        className="card"
        style={{
          width: "400px",
          border: "1px  solid black",
          padding: "16px",
          borderRadius: "4px",
        }}
      >
        <h1>Card</h1>
        <img
          src={img}
          alt=""
          style={{
            width: "300px",
            height: "200px",
            borderRadius: "5px",
          }}
        />
        <div
          className="card-content"
          style={{ display: "flex", padding: "16px", flexDirection: "column" }}
        >
          <h1>Main Card content</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            nesciunt, odio dolorem totam itaque voluptatem qui ullam. Obcaecati
            corporis nisi quod, ipsam quam id harum illum temporibus nulla
            impedit enim!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";
import img from "./assets/glass1.jpg";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      // console.log("response ==", response);
      setCardData(response.data);
    };

    data();
  }, []);

  console.log("card data ==", cardData);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: "764px",
        textAlign: "center",
        flexWrap: "wrap",
      }}
    >
      {cardData.map((newData) => (
        <div
          key={newData.id}
          className="card"
          style={{
            width: "400px",
            height: "400px",
            border: "1px  solid black",
            padding: "5px",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <h4>{newData.title}</h4>

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
            style={{
              display: "flex",
              padding: "5px",
              flexDirection: "column",
            }}
          >
            <h4>User id: {newData.userId}</h4>
            <p>{newData.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

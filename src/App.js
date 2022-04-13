import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data";
import Card from "./Card";

const App = () => {
  const [tours, setTours] = useState(data);
  let elementsCount = data.length;

  return (
    <section className="background">
      <h1 className="title">Our Tours</h1>
      <div className="cards">
        {tours.map((tour, count) => {
          return <Card tour={tour} key={count} />;
        })}
      </div>
    </section>
  );
};

export default App;

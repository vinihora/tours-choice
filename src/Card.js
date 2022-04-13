import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = (props) => {
  const { img, title, price, text } = props.tour;

  const [newText, setNewText] = useState(text);
  const [readState, setReadState] = useState("Read More");
  const [showElement, setShowElement] = useState(1);

  const tranformPrice = (price) => {
    let newPrice = String(price);
    newPrice = newPrice.replace(".", ",");
    newPrice = "$" + newPrice;
    return newPrice;
  };

  const verifyText = (text) => {
    if (text.length > 250) {
      let newText = text.substr(0, 190) + " ...";
      setNewText(newText);
    } else {
      setNewText(text);
    }
  };

  useEffect(() => {
    verifyText(newText);
  }, []);

  if (showElement === 1) {
    return (
      <div className="card">
        <img src={img} className="tour-img" alt="" />
        <div className="inspect">
          <div className="line1">
            <h3>{title}</h3>
            <h3 className="price-box">{tranformPrice(price)}</h3>
          </div>
          <p className="text-p">
            {newText}
            <button
              className="btn2"
              onClick={() => {
                if (readState === "Read More") {
                  setNewText(text);
                  setReadState("Show Less");
                } else {
                  verifyText(text);
                  setReadState("Read More");
                }
              }}
            >
              {readState}
            </button>
          </p>
        </div>
        <button className="btn" onClick={() => setShowElement(0)}>
          Not Interested
        </button>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Card;

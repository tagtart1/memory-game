import Card from "./Card";
import "../styles/App.css";
import { useState, useEffect } from "react";
import ballFrog from "../imgs/ball-frog.png";
import flatFrog from "../imgs/flag-frog.png";
import strawbFrog from "../imgs/strawb-frog.png";
import tinyFrog from "../imgs/tiny-frog.png";
import uniqid from "uniqid";

const CardManager = (props) => {
  const [cardObjs, setCardObjs] = useState([
    {
      img: ballFrog,
      text: "Ball Frog",
      id: uniqid(),
    },
    {
      img: flatFrog,
      text: "Flat Frog",
      id: uniqid(),
    },
    {
      img: strawbFrog,
      text: "Strawberry Frog",
      id: uniqid(),
    },
    {
      img: tinyFrog,
      text: "Tiny Frog",
      id: uniqid(),
    },
  ]);

  const [hitCards, setHitCards] = useState({});

  const registerHit = (id) => {
    if (!hitCards[id]) {
      let hitCardsCopy = hitCards;
      hitCardsCopy[id] = true;
      setHitCards(hitCardsCopy);
      shuffleCards();

      props.increaseScore();
    } else {
      shuffleCards();
      setHitCards({});
      props.resetScore();
    }
  };

  const shuffleCards = () => {
    let cardObjsCopy = [...cardObjs];
    let tempArray = [];
    let randomIndex;

    while (tempArray.length < cardObjs.length) {
      randomIndex = Math.floor(Math.random() * cardObjsCopy.length);
      tempArray.push(cardObjsCopy[randomIndex]);
      cardObjsCopy.splice(randomIndex, 1);
    }
    setCardObjs(tempArray);
  };

  return (
    <div className="card-container">
      {cardObjs.map((cardObj) => {
        return (
          <Card key={cardObj.id} registerHit={registerHit} cardObj={cardObj} />
        );
      })}
    </div>
  );
};

export default CardManager;

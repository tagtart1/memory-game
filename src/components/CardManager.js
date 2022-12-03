import Card from "./Card";
import "../styles/App.css";
import { useState, useEffect } from "react";
import objectPool from "./CardObjectPool";

const CardManager = (props) => {
  const frogPool = objectPool;

  const getRandomObjFromPool = () => {
    // let cardAmount = 6 + (level - 1) * 2;
    let cardAmount = 12;
    let newCardObjs = [];
    let poolCopy = [...frogPool];

    while (newCardObjs.length < cardAmount) {
      let randomIndex = Math.floor(Math.random() * poolCopy.length);
      newCardObjs.push(poolCopy[randomIndex]);
      poolCopy.splice(randomIndex, 1);
    }

    return newCardObjs;
  };

  const [cardObjs, setCardObjs] = useState(getRandomObjFromPool());

  const [hitCards, setHitCards] = useState({});

  const registerHit = (id) => {
    if (!hitCards[id]) {
      let hitCardsCopy = hitCards;
      hitCardsCopy[id] = true;
      setHitCards(hitCardsCopy);
      shuffleCards();

      props.increaseScore();
    } else {
      setHitCards({});
      shuffleCards();
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

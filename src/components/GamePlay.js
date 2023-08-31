import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if(!selectedNumber) {
      setError("You must select a number.");
      return;
    }

    setError("");

    if (selectedNumber ===   randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };
  


  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score}></TotalScore>
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        ></NumberSelector>
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice}></RollDice>
      <div className="btns">
        <OutlineButton onClick={() => setScore(0)}>Reset</OutlineButton>
        <Button onClick={() => setShowRules(!showRules)}>{showRules ? "Hide Rules" : "Show rules"}</Button>
        {showRules && <Rules></Rules>}
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    padding-top: 70px;
  }

  .btns{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap: 10px;
  }
`;

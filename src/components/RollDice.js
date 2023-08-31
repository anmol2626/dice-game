import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
  
  return (
    <DiceContainer>
      <div className="dice">
        <img
          onClick={rollDice}
          src={`/images/dice/dice_${currentDice}.png`}
          alt="dice1"
        ></img>
      </div>
      <p>Click Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;

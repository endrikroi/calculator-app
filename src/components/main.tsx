import { evaluate } from "mathjs";
import React from "react";
import {
  AppDiv,
  CalculatorDiv,
  ClearButton,
  Row,
  StyledInput,
  TopMarginedDiv,
} from "../styles";
import CalculatorRow from "./calculator-row";

const operators = ["-", "+", "*", "/", "="];

const Main = () => {
  const [calcValue, setCalcValue] = React.useState("");

  const handleClick = (v: string) => {
    const isValueOperator = operators.includes(v);
    const isOperatorBeingInsertedAtStart =
      isValueOperator && calcValue.length === 0;
    const isLastCharacterOperator = operators.includes(
      calcValue[calcValue.length - 1]
    );
    const isTryingToAddTwoOperatorsInRow =
      isValueOperator && isLastCharacterOperator;
    const isEqualingAfterOperator = v === "=" && isLastCharacterOperator;
    if (
      isOperatorBeingInsertedAtStart ||
      isTryingToAddTwoOperatorsInRow ||
      isEqualingAfterOperator
    ) {
      return;
    }

    if (v === "=" && !isLastCharacterOperator) {
      setCalcValue((prev) => evaluate(prev));
      return;
    }
    setCalcValue((prev) => prev + v);
  };

  const rows = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "+"],
    [".", "0", "=", "-"],
  ].map((row, i) => {
    return <CalculatorRow key={i} rowValues={row} onClick={handleClick} />;
  });

  return (
    <AppDiv>
      <TopMarginedDiv />
      <CalculatorDiv>
        <Row>
          <StyledInput value={calcValue} />
        </Row>
        {rows}
        <ClearButton
          onClick={() => {
            setCalcValue("");
          }}
        >
          Clear
        </ClearButton>
      </CalculatorDiv>
    </AppDiv>
  );
};

export default Main;

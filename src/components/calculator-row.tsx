import React from "react";
import { Button, OperatorButton, Row } from "../styles";

const CalculatorRow = ({
  rowValues,
  onClick,
}: {
  rowValues: string[];
  onClick: (v: string) => void;
}) => {
  const buttons = rowValues.map((value, index) => {
    const handleClick = () => {
      onClick(value);
    };
    if (rowValues.length - 1 === index) {
      return (
        <OperatorButton onClick={handleClick} key={value}>
          {value}
        </OperatorButton>
      );
    }

    return (
      <Button onClick={handleClick} key={value}>
        {value}
      </Button>
    );
  });

  return <Row>{buttons}</Row>;
};

export default CalculatorRow;

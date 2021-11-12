import styled from "styled-components";

export const TitleDiv = styled.div`
  font-size: 40px;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const TopMarginedDiv = styled.div`
  margin-top: 30px;
`;
export const AppDiv = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100 vh;
  width: 100%;
`;

export const CalculatorDiv = styled.div`
  width: 400px;
  height: 600px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledInput = styled.input`
  text-align: right;
  width: 400px;
  height: 3em;
  justify-content: center;
  font-weight: 900;
  font-size: 1.4em;
  background-color: #1b1a1a;
  color: white;
`;

export const Button = styled.button`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 1.4 em;
  background-color: #959c9a;
  color: gray;
  flex: 1;
  outline: 1px solid gray;
`;

export const OperatorButton = styled.button`
  background-color: #e7d216;
  color: white;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 1.4 em;
  flex: 1;
  outline: 1px solid gray;
`;

export const ClearButton = styled.button`
  background-color: #e7d216;
  color: white;
  text-align: center;
  width: 400px;
  height: 3em;
  justify-content: center;
  font-weight: 900;
  font-size: 1.4em;
  outline: 1px solid gray;
`;

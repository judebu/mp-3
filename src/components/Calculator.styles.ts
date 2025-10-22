import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: 2px solid black;
  border-radius: 12px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputNum = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const NumInput = styled.input`
  width: 160px;
  height: 32px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 0px 8px;
  font-family: "Audiowide", sans-serif;
  `;

export const ButtonGrid = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 10px;
`;

export const CalcButton = styled.button`
  border: 2px solid black;
  width: 45px;
  border-radius: 10px;
  padding: 10px 0;
  font-family: "Audiowide", sans-serif;
  background: rgb(100, 140, 106);
  color: white;
  cursor: pointer;
`;

export const Output = styled.div`
  margin-top: 15px;
  font-weight: bold;
  font-size: 20px;
`;

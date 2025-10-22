import { useCalculator } from "../hooks/useCalculator";
import {CalculatorWrapper,InputNum,NumInput,ButtonGrid,CalcButton,Output,} from "../components/Calculator.styles";

export default function Projects() {
  const {num1,num2,result,isNegative,setNum1,setNum2,calculate,clear,} = useCalculator();

  return (
    <main>
      <title>Projects | Jude Hosmer's Resume</title>
        <h2>Projects</h2>
        <br/>
      <hr/>
      <br/>
          <p>
            <strong>Jude's Magical Calculator</strong>
            <br></br>
            <br></br>
          </p>

      <CalculatorWrapper>
        <InputNum>
          <NumInput
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="First number"/>
          <NumInput
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Second number"/>
        </InputNum>
        <ButtonGrid>
          <CalcButton onClick={() => calculate("add")}>+</CalcButton>
          <CalcButton onClick={() => calculate("subtract")}>-</CalcButton>
          <CalcButton onClick={() => calculate("multiply")}>*</CalcButton>
          <CalcButton onClick={() => calculate("divide")}>/</CalcButton>
          <CalcButton onClick={() => calculate("power")}>^</CalcButton>
          <CalcButton onClick={clear}>Clear</CalcButton>
        </ButtonGrid>

        <Output style={{ color: isNegative ? "red" : "black" }}>{result}</Output>
      </CalculatorWrapper>
    </main>
  );
}

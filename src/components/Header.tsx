import styled from "styled-components";




const StyledHeader = styled.header`
    background-color: rgb(100, 140, 106);
    text-align: center;
    padding: 15px;
    width: 80vw;
    margin: 0 auto;
    border-radius: none;
    font-family: "Audiowide", sans-serif;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

  `;

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>Jude Hosmer's Resume</h1>
      </div>
    </StyledHeader>
  );
}

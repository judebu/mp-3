import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    width: 80vw;
    margin: 0 auto;
    left: 0;
    right: 0;
    background-color: rgb(100, 140, 106);
    color: white;
    text-align: right;
    padding: 10px 20px;
    font-size: calc(11px);
    font-family: "Audiowide", sans-serif;
    color: white;
    text-decoration: underline;

  `;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>
          All Rights Reserved by Jude Hosmer <Link to="/credits">Credits</Link> &copy;
        </p>
      </div>
    </StyledFooter>
  );
}
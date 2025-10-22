import { Outlet} from 'react-router-dom';
import styled from 'styled-components';
import StyledFooter from './Footer'
import StyledNav from './Nav'
import StyledHeader from './Header'


const StyledMain = styled.main`
  padding: 20px;
  flex: 1;
  text-align: center;
  
`;

const StyledDiv = styled.div`
  width: 80vw;
  background-color: #ffffff;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  font-family: "Audiowide", sans-serif;
  border-right: 2px solid black;
  border-left: 2px solid black;

  @media screen and (max-width: 1000px) {
    width: 80vw;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export default function Layout() {

  return (
    <>
    <StyledHeader/>

      <StyledDiv>

        <StyledNav/>

          <StyledMain>

            <Outlet/>

          </StyledMain>

      </StyledDiv>

      <StyledFooter/>
    </>
  );
}
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 30%;
    padding: 10px;
    background-color: rgb(100, 140, 106);
    order: -1;
    border-bottom-left-radius: 12px;
    a:hover {
    color: crimson;
}

    @media (max-width: 750px) {
        width: 100%;
        order: -1;
        border-radius: 0;
        display: flex;
        justify-content: center;
    }
`;

const StyledUl = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-family: "Audiowide", sans-serif;


    @media (max-width: 750px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
`;

const StyledLi = styled.li`
    color: black;           
    text-decoration: none; 
    display: block;
    background-color: white;
    border: 2px; 
    border: solid;
    border-color: black;
    padding: 10px 10px;
    border-radius: 10px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);

    @media (max-width: 750px) {
        flex: 1 0 140px;
        max-width: 140px;
        margin: 5px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        color: crimson;
    }
`;



export default function Nav() {
  return (
    <StyledNav>
      <StyledUl>
          { <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>}
          { <StyledLi><StyledLink to={`/education`}>Education</StyledLink></StyledLi>}
          { <StyledLi><StyledLink to={`/experiences`}>Experiences</StyledLink></StyledLi>}
          { <StyledLi><StyledLink to={`/achievements`}>Achievements</StyledLink></StyledLi>}
          { <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>}
          { <StyledLi><StyledLink to={`/references`}>References</StyledLink></StyledLi>}
      </StyledUl>
    </StyledNav>
  );
}
import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <span1>C</span1>ode<span>10X</span>
        </Logo>
        <Nav>
          <nav>Home</nav>
          <nav>About</nav>
          <nav>Portfolio</nav>
          <nav>Contact</nav>
        </Nav>
        <Download>
          Download <span>cv</span>
        </Download>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #23252f;
  position: fixed;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  color: white;
`;
const Logo = styled.div`
  font-weight: 500;

  span {
    color: #2cb064;
    font-size: 2rem;
    font-weight: 900;
  }

  span1 {
    color: #2cb064;
    font-weight: 500;
  }
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: green; */
  width: 30%;
  font-weight: 500;

  nav {
    position: relative;

    ::after {
      content: "";
      position: absolute;
      background-color: #2cb064;
      height: 3px;
      width: 100%;
      left: 0;
      top: 21px;
      opacity: 0;
      transition: all 550ms;
      transform: scale(0);
      transform-origin: center left;
    }
    &.active {
      ::after {
        content: "";
        position: absolute;
        background-color: #2cb064;
        height: 3px;
        width: 80%;
        left: 0;
        top: 21px;
        opacity: 1;
        transition: all 550ms;
        transform: scale(1);
        transform-origin: center left;
      }
    }
    :hover {
      cursor: pointer;
      transform: scale(1.02);

      ::after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;
const Download = styled.div`
  border: 2px solid #2cb064;
  font-weight: 500;
  padding: 5px;
  span {
    color: #2cb064;
  }
`;

import React from "react";
import styled from "styled-components";
import { MdOutlineWavingHand } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const body = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <Nav1>
            Hi THERE <MdOutlineWavingHand />
            I'M
            <br />
            <nav> RAHEEM TOHEEB</nav>
          </Nav1>
          <Nav2>FULLSTACK DEVELOPER + UI/UX DESIGNER</Nav2>
          <Nav3>
            I'm a professional Fullstack Sofware Engineer
            <br /> with UI/UX skills base in Lagos.
          </Nav3>
          <Button>Hire Me</Button>

          <Node>
            <Nodejs></Nodejs>
            <Reacts></Reacts>
            <Mongos></Mongos>
            <Figma></Figma>
          </Node>
        </Right>
        <Left>
          <Image>
            <img src="istockphoto-1299975932-612x612-removebg-preview.png" />
          </Image>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default body;

const Nodejs = styled(FaNodeJs)`
  height: 40px;
  width: 40px;
  color: yellow;
`;
const Figma = styled(FaFigma)`
  height: 40px;
  width: 40px;
  color: darkred;
`;
const Mongos = styled(SiMongodb)`
  height: 40px;
  width: 40px;
  color: green;
`;
const Reacts = styled(FaReact)`
  height: 40px;
  width: 40px;
  color: blue;
`;
const Node = styled.div`
  margin-top: 30px;
  img {
    height: 100px;
    width: 100px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const Image = styled.div`
  img {
    background-position: center;
    object-fit: contain;
    height: 500px;
    width: 500px;
  }
`;
const Button = styled.div`
  width: 100px;
  height: 40px;
  color: white;
  border-radius: 5px;
  background-color: #2cb064;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-top: 10px;
`;
const Nav1 = styled.div`
  font-size: 0.8rem;
  nav {
    font-size: 2.8rem;
    margin-top: 10px;
    font-weight: bold;
  }
`;
const Nav2 = styled.div`
  color: #2cb064;
  font-size: 0.7rem;
  font-weight: bold;
  margin-top: 10px;
`;
const Nav3 = styled.div`
  margin-top: 10px;
`;
const Right = styled.div`
  height: 80%;
  width: 50%;
  /* background-color: white; */
`;
const Left = styled.div`
  /* background-color: white; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 50%;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: red; */
  /* background-color: blue; */
`;

import React from "react";
import styled from "styled-components";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { SiPostman } from "react-icons/si";

const About = () => {
  return (
    <Container>
      <Up>ABOUT ME</Up>
      <Wrapper>
        <Layer1>
          <Left>
            <img src="WhatsApp Image 2022-03-28 at 11.04.54 AM.jpeg" />
          </Left>
          <Right>
            <p>
              Hi, I'm Raheem Toheeb, a tech ethusiast and FULLSTACK Engineer and
              a web developer from Lagos,Nigeria. <br />
              I've been building stuff on the web since when I join Codelab
              insititute in 2021 where I was taugt fullstack.
            </p>
            <p>
              I've made countless side projects and I also posses magical powers
              of using react to build delightful user interfaces.
              <p>
                <nav>
                  I also love doing open source development, I actively maintain
                  various notable open source projects
                  <br /> with over, 30k+ stars
                </nav>
                on GitHub and 50m+ hits. It gives me a wonderful feeling of
                achievement and joy which I cannot explain in words.
              </p>
            </p>
          </Right>
        </Layer1>
        <Layer2>
          <Complex>
            Team Work
            <Writeup>
              {" "}
              As a member of a great developer community, Wrking on complex
              project has never been a challenge cos I have backup from Codelab
              community that house so many talents of softwrae developers. As a
              result work are been executed faster.
            </Writeup>
            <Image>
              <img src="/codelab.jpeg" />
              <img src="codelab.jpeg" />
              <img src="codelab.jpeg" />
            </Image>
          </Complex>
          <Skill>
            My Skill Set
            <Icon>
              <Reacts></Reacts>
              <Mongos></Mongos>
              <Figma></Figma>
              <Nodejs></Nodejs>
              <Azure></Azure>
              <Post></Post>
            </Icon>
          </Skill>
        </Layer2>
      </Wrapper>
    </Container>
  );
};

export default About;
const Icon = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  /* background-color: red; */
  margin-top: 30px;
`;
const Nodejs = styled(FaNodeJs)`
  height: 50px;
  width: 50px;

  color: yellow;
`;
const Figma = styled(FaFigma)`
  height: 50px;
  width: 50px;
  color: darkred;
`;
const Post = styled(SiPostman)`
  height: 50px;
  width: 50px;
  color: #ff6c37;
`;
const Mongos = styled(SiMongodb)`
  height: 50px;
  width: 50px;
  color: green;
`;
const Reacts = styled(FaReact)`
  height: 50px;
  width: 50px;
  color: blue;
`;
const Azure = styled(SiMicrosoftazure)`
  height: 50px;
  width: 50px;
  color: #89b7f7;
`;
const Layer1 = styled.div`
  display: flex;
  justify-content: space-around;
  /* background-color: red; */
  width: 90%;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: 100%;
  font-weight: 800;
`;
const Layer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Complex = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 800;
  font-size: 1.5rem;
`;
const Writeup = styled.div`
  width: 80%;
  font-size: 1rem;
  font-weight: normal;
`;
const Image = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background-color: green; */
  img {
    height: 300px;
    width: 300px;
    background-position: center;
    object-fit: contain;
  }
`;

const Container = styled.div`
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #23252f;
`;

const Up = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 90%;
`;
const Right = styled.div`
  /* background-color: red; */
`;

const Nav1 = styled.div``;
const Nav2 = styled.div``;

const Left = styled.div`
  /* background-color: yellow; */
  img {
    width: 200px;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 100%;
  }
`;

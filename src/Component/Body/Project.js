import React from "react";
import styled from "styled-components";

const Project = () => {
  return (
    <Container>
      <Up>My Projects</Up>
      <Wrapper>
        <Case1>
          <Left>
            <img src="Lightup Africa.jpg" />
          </Left>
          <Right>
            <nav>Lightup Africa</nav>
            <p>
              Lightup Africa is an application that focuses in ensuiring that
              electricity is brought to all Africa home at a minimal or no cost
              <p>
                <p>
                  The exponential growth in the deman for solar energy and it
                  accessories in increasinbg on daily basis.
                  <br /> Thsi app help users in picking the proper sizing and
                  billing for their household
                </p>
                The only way to Light up Africa is through renewable energy.
              </p>
            </p>
            <Button>Check it Out</Button>
          </Right>
        </Case1>
        <Case2>
          <Left>
            <img src="comfort.jpg" />
          </Left>
          <Right>
            <nav>Lightup Africa</nav>
            <p>
              Lightup Africa is an application that focuses in ensuiring that
              electricity is brought to all Africa home at a minimal or no cost
              <p>
                <p>
                  The exponential growth in the deman for solar energy and it
                  accessories in increasinbg on daily basis.
                  <br /> Thsi app help users in picking the proper sizing and
                  billing for their household
                </p>
                The only way to Light up Africa is through renewable energy.
              </p>
            </p>
            <Button2>Check it Out</Button2>
          </Right>
        </Case2>
      </Wrapper>
    </Container>
  );
};

export default Project;
const Button2 = styled.div`
  background-color: #e91e63;

  color: white;
  font-weight: 500;
  border-radius: 10px;
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Up = styled.div`
  margin-top: 70px;
  font-size: 1.8rem;
  font_weight: 900; ;
`;
const Case1 = styled.div`
  display: flex;
`;
const Case2 = styled.div`
  display: flex;
  margin-top: 30px;
  /* background-color: red; */
  justify-content: space-around;
`;

const Button = styled.div`
  background-color: #00441b;
  color: white;
  font-weight: 500;
  border-radius: 10px;
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #23252f;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  flex-direction: column;
`;
const Wrapper = styled.div`
  margin-top: 50px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Right = styled.div`
  width: 40%;
  font-size: 0.9rem;
  height: 300px;
  nav {
    font-weight: 500;
    font-size: 1.4rem;
  }
`;
const Left = styled.div`
  width: 60%;
  img {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 600px;
    height: 300px;
    border-radius: 5px;
  }
`;

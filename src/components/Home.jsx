import styled from "styled-components";
import sair from "../assets/images/saida.svg";
import entrada from "../assets/images/add.svg";
import remove from "../assets/images/remove.svg";

export default function Home() {
  return (
    <ContainerHome>
      <Header>
        <h1>Olá, teste</h1>
        <img src={sair} alt="sair" />
      </Header>
      <Main>
        <h2>
          Não há registros de <br /> entrada ou saída
        </h2>
      </Main>
      <Footer>
        <div>
          <img src={entrada} alt="entrada" />
          <h3>
            Nova <br /> entrada
          </h3>
        </div>
        <div>
          <img src={remove} alt="saída" />
          <h3>
            Nova <br /> saída
          </h3>
        </div>
      </Footer>
    </ContainerHome>
  );
}

const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8c11be;
  box-sizing: border-box;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 12px;
  position: relative;

  h2 {
    font-family: "Raleway";
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #868686;
  }

  h4 {
    display: flex;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 15px;
    color: #000000;
  }
`;
const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 155px;
  gap: 0px 15px;

  div {
    width: 100%;
    position: relative;
    height: 155px;
    background-color: #a328d6;
    border-radius: 5px;
  }

  img {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 9px;
    left: 9px;
  }

  h3 {
    font-family: "Raleway";
    width: 100%;
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
`;

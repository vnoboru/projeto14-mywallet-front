import styled from "styled-components";

export default function Output() {
  return (
    <Div>
      <h1>Nova saída</h1>
      <form>
        <input type="text" placeholder="Valor" required />
        <input type="text" placeholder="Descrição" required />
        <button type="submit">Salvar Saída</button>
      </form>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 25px;
  background: #a328d6;

  h1 {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    height: 58px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 15px;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    margin-bottom: 13px;
    border: none;
  }

  button {
    width: 100%;
    height: 46px;
    border-radius: 5px;
    background-color: #a328d6;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 20px;
    border: none;
    color: #ffffff;
  }
`;

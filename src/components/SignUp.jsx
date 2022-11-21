import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <ContainerSignUp>
      <h1>MyWallet</h1>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a senha" />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Entre Agora!</p>
      </Link>
    </ContainerSignUp>
  );
}

const ContainerSignUp = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Saira Stencil One";
    font-weight: 400;
    font-size: 32px;
    color: #ffffff;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  input {
    height: 58px;
    border-radius: 5px;
    margin-bottom: 13px;
    border: none;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 20px;
    color: #000000;
  }

  button {
    background: #8c11be;
    border: none;

    font-family: "Raleway";
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  }

  p {
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    margin-top: 48px;
    text-decoration-line: underline;
  }
`;

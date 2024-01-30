import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function LoginForm() {


    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
        navigate(`/order/${inputValue}`);
    };

    const handlechange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <LoginFormStyles onSubmit={handleSubmit}>
            <h2>Bienvenue chez nous !</h2>
            <hr />
            <h3>Connectez-vous</h3>
            <input value={inputValue} onChange={handlechange} placeholder={"Entrez votre prénom"} required icon={<IoPersonCircleOutline className="icon"/>}/>

            <button>Mon espace </button>
        </LoginFormStyles>
    );
}

const LoginFormStyles = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Pacifico", sans-serif;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    border: none;
    border-radius: ${theme.borderRadius.round};
  }

  button {
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    color: white;
    height: 40px;
    margin-top: ${theme.spacing.md};
    font-size: ${theme.fonts.size.P0};
    border: none;
  }

  hr {
    border: 1.56px solid ${theme.colors.loginLine}
  }
  
  h2, h3 {
    color: white;
    font-size: ${theme.fonts.size.P4};
    margin : ${theme.spacing.md};

    @font-face {
        font-family: "Pacifico";
        src: url('../../public/Pacifico-Regular.ttf');
    }
    
  }`
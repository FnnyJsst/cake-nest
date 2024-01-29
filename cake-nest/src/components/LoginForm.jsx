import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";

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
            <input value={inputValue} onChange={handlechange} placeholder={"Entrez votre prénom"} required />

            <button>Mon espace</button>
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

  hr {
    border: 1.56px solid ${theme.colors.loginLine}
  }
  
  h2, h3 {
    color: white;
    font-size: ${theme.fonts.size.P4};

    @font-face {
        font-family: "Pacifico";
        src: url('../../public/Pacifico-Regular.ttf');
    }
    
  }`
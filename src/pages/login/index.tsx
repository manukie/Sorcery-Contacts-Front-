import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import GlobalStyles from "../../styles/GlobalStyles";
import { GlobalReset } from "../../styles/Reset";
import { StyledInput,  } from "../../styles/Form";
import { StyledCreateButton, StyledRegisterButton } from "../../styles/Button";
import { StyledHeadline3 } from "../../styles/Typography";
import { StyledForm } from "./styles";
import { LoginData, schema } from "./validator";

export const Login = () => {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const submit = async (data: LoginData) => {
    try {
      await signIn(data);
      navigate("/profile");
    } catch (error) {
      console.error("Erro ao tentar fazer login:", error);
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="loginPage">
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <main>
        <StyledForm onSubmit={handleSubmit(submit)}>
          <StyledHeadline3 fontSize="big" fontWeight="high">E-mail</StyledHeadline3>
          <StyledInput type="email" id="email" {...register("email")} />

          <StyledHeadline3 fontSize="big" fontWeight="high">Senha</StyledHeadline3>
          <StyledInput type="password" id="password" {...register("password")} />

          <StyledCreateButton type="submit">
            Entrar
          </StyledCreateButton>

          <StyledRegisterButton onClick={goToRegister}>Não tem uma conta? Se cadastrar</StyledRegisterButton>
        </StyledForm>
      </main>
    </div>
  );
};

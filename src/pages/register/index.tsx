import { useForm } from "react-hook-form";
import { RegisterData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { StyledInput } from "../../styles/Form";
import { StyledCreateButton, StyledRegisterButton } from "../../styles/Button";
import { StyledForm } from "../login/styles";
import { StyledHeadline3 } from "../../styles/Typography";
import { FormContainer } from "./styles";
import { GlobalReset } from "../../styles/Reset";
import GlobalStyles from "../../styles/GlobalStyles";
import { Header } from "../../components/Header";


export const Register = () => {
  const { signUp } = useAuth();
  const { register, handleSubmit, formState } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterData) => {
    try {
      await signUp(data);
    } catch (error) {
      console.error("Erro ao tentar se cadastrar:", error);
    }
  };

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <div className="registerPage">
    <GlobalReset />
    <GlobalStyles />
    <Header />
    <main>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledHeadline3 fontSize="big">Nome</StyledHeadline3>
          <StyledInput type="text" id="name" {...register("name")} />

          <StyledHeadline3 fontSize="big">E-mail</StyledHeadline3>
          <StyledInput type="email" id="email" {...register("email")} />

          <StyledHeadline3 fontSize="big">Número de celular</StyledHeadline3>
          <StyledInput type="text" id="phone" {...register("phone")} />

          <StyledHeadline3 fontSize="big">Senha</StyledHeadline3>
          <StyledInput type="password" id="password" {...register("password")} />

          <StyledCreateButton type="submit" disabled={formState.isSubmitting}>
            Cadastrar
          </StyledCreateButton>

          <StyledRegisterButton onClick={goToLogin}>Já tem uma conta? Entre agora!</StyledRegisterButton>
        </StyledForm>
      </FormContainer>
    </main>
    </div>
  );
};

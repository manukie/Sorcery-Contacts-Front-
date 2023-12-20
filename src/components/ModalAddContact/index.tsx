import { Dispatch, SetStateAction } from "react";
import { Contact } from "../../pages/dashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactData, schema } from "./validator";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import GlobalStyles from "../../styles/GlobalStyles";
import { GlobalReset } from "../../styles/Reset";
import { StyledInput } from "../../styles/Form";
import { StyledHeadline3 } from "../../styles/Typography";
import { FormContainer } from "./styles";
import { StyledCreateButton } from "../../styles/Button";

interface ModalAddContactProps {
  toggleModal: () => void;
  setContacts: Dispatch<SetStateAction<Contact[]>>;
}

export const ModalAddContact = ({ setContacts, toggleModal }: ModalAddContactProps) => {
  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(schema),
  });

  const createContact = async (data: ContactData) => {
    const response = await api.post("/contacts", { ...data });

    setContacts((previousContacts) => [response.data, ...previousContacts]);
    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <FormContainer>
      <GlobalReset />
      <GlobalStyles />
        <form onSubmit={handleSubmit(createContact)}>
          <StyledHeadline3 fontSize="big" fontWeight="high">Nome</StyledHeadline3>
          <StyledInput type="text" id="name" {...register("name")} />

          <StyledHeadline3 fontSize="big" fontWeight="high">E-Mail</StyledHeadline3>
          <StyledInput type="email" id="email" {...register("email")} />

          <StyledHeadline3 fontSize="big" fontWeight="high">Número de celular</StyledHeadline3>
          <StyledInput type="text" id="phone" {...register("phone")} />

          <StyledHeadline3 fontSize="big" fontWeight="high">Descrição</StyledHeadline3>
          <StyledInput type="text" id="desctiption" {...register("description")} />

          <StyledCreateButton type="submit">Cadastrar</StyledCreateButton>
        </form>
      </FormContainer>
    </Modal>
  );
};

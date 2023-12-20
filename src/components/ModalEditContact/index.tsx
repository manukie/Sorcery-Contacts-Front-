import { Dispatch, SetStateAction } from "react";
import { Contact } from "../../pages/dashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactData, schema } from "../ModalAddContact/validator";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import { FormContainer } from "../ModalAddContact/styles";
import { GlobalReset } from "../../styles/Reset";
import GlobalStyles from "../../styles/GlobalStyles";
import { StyledCreateButton } from "../../styles/Button";
import { StyledInput } from "../../styles/Form";
import { StyledHeadline3 } from "../../styles/Typography";

interface EditContactModalProps {
    contactToEdit: Contact | null;
    setContactToEdit: Dispatch<SetStateAction<Contact | null>>;
    setContacts: Dispatch<SetStateAction<Contact[]>>;
    toggleModal: () => void;
  }
  
  export const EditContactModal = ({
    contactToEdit,
    setContactToEdit, 
    setContacts,
    toggleModal,
  }: EditContactModalProps) => {
    const { register, handleSubmit } = useForm<ContactData>({
      resolver: zodResolver(schema),
    });
  
    const editContact = async (data: ContactData) => {
        if (!contactToEdit) {
          return;
        }
      
        try {
          const response = await api.patch(`/contacts/${contactToEdit.id}`, { ...data });
          setContactToEdit(response.data);
          toggleModal();
          setContacts((prevContacts) =>
          prevContacts.map((contact) =>
            contact.id === response.data.id ? response.data : contact
          )
        );
      } catch (error) {
        console.error("Erro ao tentar editar o contato:", error);
      }
    };

  return (
    <Modal toggleModal={toggleModal}>
      <FormContainer>
      <GlobalReset />
      <GlobalStyles />
        <form onSubmit={handleSubmit(editContact)}>
        <StyledHeadline3 fontSize="big" fontWeight="high">Nome</StyledHeadline3>
          <StyledInput type="text" id="name" {...register("name", { value: contactToEdit?.name })} />

          <StyledHeadline3 fontSize="big" fontWeight="high">E-Mail</StyledHeadline3>
          <StyledInput type="email" id="email" {...register("email", { value: contactToEdit?.email })} />

          <StyledHeadline3 fontSize="big" fontWeight="high">Número de celular</StyledHeadline3>
          <StyledInput type="text" id="phone" {...register("phone", { value: contactToEdit?.phone })} />

          <StyledHeadline3 fontSize="big" fontWeight="high">Descrição</StyledHeadline3>
          <StyledInput type="text" id="description" {...register("description", { value: contactToEdit?.description })} />

          <StyledCreateButton type="submit">Salvar alterações</StyledCreateButton>
        </form>
      </FormContainer>
    </Modal>
  );
};

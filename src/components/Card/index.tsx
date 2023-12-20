import { Contact } from "../../pages/dashboard";
import React, { useState } from "react";
import { EditContactModal } from "../ModalEditContact";
import { CardContainer, CardHeader, CardParagraph, DeleteButton, EditButton, ButtonArea } from "./styles";

interface CardProps {
  contact: Contact;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  onDelete: () => Promise<void>;
}

export const Card: React.FC<CardProps> = ({ contact, setContacts, onDelete }) => {
  const { name, email, phone, description, joined_at } = contact;
  const formattedDate = new Date(joined_at).toLocaleString();
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);

  const toggleEditModal = () => {
    setIsOpenEditModal(!isOpenEditModal);
    setContactToEdit(contact);
  };

  const handleDelete = async () => {
    try {
      await onDelete();
    } catch (error) {
      console.error("Erro ao deletar o contato:", error);
    }
  };

  return (
    <CardContainer>
      <CardHeader>{name}</CardHeader>
      <CardParagraph>E-mail: {email}</CardParagraph>
      <CardParagraph>Celular: {phone}</CardParagraph>
      <CardParagraph>Descrição: {description}</CardParagraph>
      <CardParagraph>Adicionado em: {formattedDate}</CardParagraph>
      <ButtonArea>
        <DeleteButton type="button" onClick={handleDelete}>
          Apagar contato
        </DeleteButton>
        <EditButton type="button" onClick={toggleEditModal}>
          Editar
        </EditButton>
      </ButtonArea>

      {isOpenEditModal && (
        <EditContactModal
          contactToEdit={contactToEdit}
          setContactToEdit={setContactToEdit}
          setContacts={setContacts}
          toggleModal={toggleEditModal}
        />
      )}
    </CardContainer>
  );
};

export default Card;

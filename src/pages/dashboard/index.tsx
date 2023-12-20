import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Board, ContactButton, Container, NoContactsMessage } from "./styles";
import { ModalAddContact } from "../../components/ModalAddContact";
import { GlobalReset } from "../../styles/Reset";
import GlobalStyles from "../../styles/GlobalStyles";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  joined_at: Date;
  title: string;
}

export const UserPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { signOut } = useAuth();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await api.get<Contact[]>("/contacts");
        setContacts(response.data);
      } catch (error) {
        console.error("Erro ao buscar os contatos:", error);
      }
    };

    fetchContacts();
  }, []);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const handleDeleteContact = async (contactId: string) => {
    try {
      await api.delete(`/contacts/${contactId}`);
      setContacts((prevContacts) => prevContacts.filter((c) => c.id !== contactId));
    } catch (error) {
      console.error("Erro ao deletar o contato:", error);
    }
  };

  const renderBoard = (contactsToRender: Contact[]) =>
    contactsToRender.map((contact) => (
      <Card
        key={contact.id}
        contact={contact}
        setContacts={setContacts}
        onDelete={() => handleDeleteContact(contact.id)} 
      />
    ));

  return (
    <div className="loginPage">
      <GlobalReset />
      <GlobalStyles />
      <Header />  
      <Container>
        <header>
          <ContactButton type="button" onClick={toggleModal}>
            Adicionar contato
          </ContactButton>
        </header>

        {isOpenModal && <ModalAddContact toggleModal={toggleModal} setContacts={setContacts} />}

        <main>
          {contacts.length === 0 ? (
            <NoContactsMessage>Sua lista de contatos está vazia! Que tal adicionar um contato?</NoContactsMessage>
          ) : (
            <Board>{renderBoard(contacts)}</Board>
          )}
        </main>

        <footer>
          <ContactButton onClick={signOut}>Sair</ContactButton>
        </footer>
      </Container>
    </div>
  );
};

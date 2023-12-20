import Logo from "../../assets/sorcery_logo.png"
import { StyledContainer } from "../../styles/Grid";
import { StyledHeader } from "./styles";

export const Header = () => {
   return (
      <StyledHeader>
         <StyledContainer>
            <div className="flexBox">
               <img src={Logo} alt="Logo da Sorcery" />
            </div>
         </StyledContainer>
      </StyledHeader>
   );
};
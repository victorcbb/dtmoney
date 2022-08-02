import { Contenet, HeaderContainer } from "./styles"
import logoImg from "../../assets/logo.svg"

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }:HeaderProps) {
  return (
    <HeaderContainer>
      <Contenet>
        <img 
          src={logoImg} 
          alt="Logo de cifrão branco dentro de cíuculo verde seguido do nome DTmoney" 
        />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Contenet>
    </HeaderContainer>
  )
}
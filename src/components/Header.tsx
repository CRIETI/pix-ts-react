import { House, List, Plus } from "phosphor-react";

import logoPix from "../assets/logo-pix.svg";

import {
  ContentContainer,
  HeaderContainer,
  NavbarLink,
  NavLinkContainer,
} from "./Header.styles";

export function Header() {
  return (
    <HeaderContainer>
      <ContentContainer>
        <NavLinkContainer>
          <NavbarLink to="/home">
            <House size={32} />
          </NavbarLink>
          <NavbarLink to="/pix">
            <List size={32} />
          </NavbarLink>
          <NavbarLink to="/new-pix">
            <Plus size={32} />
          </NavbarLink>
        </NavLinkContainer>
        <img src={logoPix} alt="Logotipo do Pix" />
      </ContentContainer>
    </HeaderContainer>
  );
}

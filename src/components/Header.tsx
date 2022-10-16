import { House, List, Moon, Plus } from "phosphor-react";
import { useEffect, useState } from "react";

import logoPix from "../assets/logo-pix.svg";
import { useCookies } from "react-cookie";

import {
  ContentContainer,
  DarkModeContainer,
  HeaderContainer,
  NavbarLink,
  NavLinkContainer,
  Switch,
} from "./Header.styles";

export function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["isDark"]);

  useEffect(() => {
    cookies.isDark && setIsDarkTheme(true);
  }, []);

  isDarkTheme ? setCookie("isDark", "true") : removeCookie("isDark");

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
        <div>
          <DarkModeContainer>
            <Moon size={30} />
            <Switch>
              <input
                type="checkbox"
                onChange={(e) => setIsDarkTheme(e.target.checked)}
              />
              <span className="slider"></span>
            </Switch>
          </DarkModeContainer>
          <img src={logoPix} alt="Logotipo do Pix" />
        </div>
      </ContentContainer>
    </HeaderContainer>
  );
}

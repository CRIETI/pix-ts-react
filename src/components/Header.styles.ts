import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  float: right;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 2rem 0;

  img {
    width: 4.3rem;
    height: 4.3rem;
  }

  background: ${(props) => props.theme.secondary};
`;

export const ContentContainer = styled.div`
  width: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  a {
    color: ${(props) => props.theme.white};
  }
`;

export const NavbarLink = styled(NavLink)`
  &:hover,
  &:focus {
    color: ${(props) => props.theme.primary};
    font-weight: 700;
  }
  &.active {
    color: ${(props) => props.theme.primary};
  }
`;

export const DarkModeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// COPIAR CÓDIGO ADAPTANDO AO QUE SE PRECISA FAZ A VIDA DE UM DEV MAIS FÀCIL
// https://www.w3schools.com/howto/howto_css_switch.asp
export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 17px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 2px;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme["gray-200"]};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 17px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: ${(props) => props.theme.white};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.primary};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${(props) => props.theme.primary};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

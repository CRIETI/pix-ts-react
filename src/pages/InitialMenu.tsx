import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { DivContainer } from "./InitialMenu.styles";

export function InitialMenu() {
  return (
    <>
      <Header />
      <DivContainer>
        <Link to="/new-pix">Fazer Pix</Link>
        <Link to="/pix">Consultar</Link>
      </DivContainer>
    </>
  );
}

import { Header } from "../components/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { CreatePix, MainContainer } from "./PixList.styles";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ModalPix } from "../components/modais/ModalPix";

export interface Pix {
  id: number;
  value: number;
  createdAt: string;
  recipient: {
    id: number;
    name: string;
  };
  sender: {
    id: number;
    name: string;
  };
  type?: number;
}

export function PixList() {
  const MySwal = withReactContent(Swal);
  const [pixList, setPixList] = useState<Pix[]>([]);
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    axios.get<Pix[]>("http://localhost:3333/pix").then((response) => {
      setPixList(response.data);
    });
  }, [closeModal]);

  function filter(userId: number, type: string) {
    axios
      .get<Pix[]>(`http://localhost:3333/pix/${userId}/${type}`)
      .then((response) => {
        setPixList(response.data);
      });
  }

  const showSwal = () => {
    MySwal.fire({
      title: <strong>Criar pix</strong>,
      html: <ModalPix closeModal={MySwal.close} />,
      showConfirmButton: false,
    }).then(() => setCloseModal(true));
  };

  console.log(closeModal);

  return (
    <div>
      <Header />
      <Sidebar onFilter={filter} />

      <MainContainer>
        <CreatePix onClick={showSwal}>Fazer Pix</CreatePix>
        {pixList.map((pix) => {
          return <Card data={pix} />;
        })}
      </MainContainer>
    </div>
  );
}

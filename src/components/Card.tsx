import styles from "./Card.module.css";
import { CardInfo } from "./CardInfo";
import { format, isToday } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Pix } from "../pages/PixList";
import {
  ContentContainer,
  DivContainer,
  EditPix,
  NewPixContainer,
  TypePix,
} from "./Card.styles";
import { Pencil } from "phosphor-react";
import { ModalPix } from "./modais/ModalPix";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useState } from "react";

interface CardProps {
  data: Pix;
}

export function Card({ data }: CardProps) {
  const [closeModal, setCloseModal] = useState(false);

  const MySwal = withReactContent(Swal);

  const formattedDate = format(new Date(data.createdAt), "dd MMM", {
    locale: ptBr,
  });

  const formattedValue = data.value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const isNewPix = isToday(new Date(data.createdAt));

  const showSwal = () => {
    MySwal.fire({
      title: <strong>Editar pix</strong>,
      html: <ModalPix closeModal={MySwal.close} data={data} />,
      showConfirmButton: false,
    }).then(() => setCloseModal(true));
  };

  return (
    <DivContainer isNew={isNewPix}>
      {isNewPix && (
        <NewPixContainer>
          <span>Novo</span>
        </NewPixContainer>
      )}
      <ContentContainer>
        <strong>{data.id}</strong>

        <CardInfo title="REMETENTE" data={data.sender.name} />
        <CardInfo title="Destinatário" data={data.recipient.name} />
        <CardInfo title="Data" data={formattedDate} />
        <CardInfo title="Valor" data={formattedValue} />

        <EditPix title="Editar" onClick={showSwal}>
          {<Pencil size={32} />}
        </EditPix>
      </ContentContainer>
    </DivContainer>
  );
}

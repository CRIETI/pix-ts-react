import styles from "./Card.module.css";
import { CardInfo } from "./CardInfo";
import { format, isToday } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Pix } from "../pages/PixList";
import {
  ContentContainer,
  DivContainer,
  NewPixContainer,
  TypePix,
} from "./Card.styles";

export function Card({
  id,
  value,
  createdAt,
  recipient,
  sender,
  type = 1,
}: Pix) {
  const formattedDate = format(new Date(createdAt), "dd MMM", {
    locale: ptBr,
  });

  const formattedValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const isNewPix = isToday(new Date(createdAt));

  return (
    <DivContainer isNew={isNewPix}>
      {isNewPix && (
        <NewPixContainer>
          <span>Novo</span>
        </NewPixContainer>
      )}
      <ContentContainer>
        <strong>{id}</strong>

        <CardInfo title="REMETENTE" data={sender.name} />
        <CardInfo title="Destinatário" data={recipient.name} />
        <CardInfo title="Data" data={formattedDate} />
        <CardInfo title="Valor" data={formattedValue} />

        <TypePix type={type}>{type === 1 ? "ENVIADO" : "RECEBIDO"}</TypePix>
      </ContentContainer>
    </DivContainer>
  );
}

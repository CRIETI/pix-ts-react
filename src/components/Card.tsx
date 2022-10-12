import { Pix } from "../App";
import styles from "./Card.module.css";
import { CardInfo } from "./CardInfo";
import { format, formatDistance } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

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

  const isNewPix = formatDistance(new Date(createdAt), new Date());

  return (
    <div className={`${styles.card} ${isNewPix && styles.new}`}>
      {isNewPix && (
        <div className={styles.newPix}>
          <span>Novo</span>
        </div>
      )}
      <div className={styles.content}>
        <strong>{id}</strong>

        <CardInfo title="REMETENTE" data={sender.name} />
        <CardInfo title="Destinário" data={recipient.name} />
        <CardInfo title="Data" data={formattedDate} />
        <CardInfo title="Valor" data={formattedValue} />

        <strong className={type === 1 ? styles.send : styles.received}>
          {type === 1 ? "ENVIADO" : "RECEBIDO"}
        </strong>
      </div>
    </div>
  );
}

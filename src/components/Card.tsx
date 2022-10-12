import styles from "./Card.module.css";
import { CardInfo } from "./CardInfo";

export function Card({ newPix = false, send = false }: any) {
  return (
    <div className={`${styles.card} ${newPix && styles.new}`}>
      {newPix && (
        <div className={styles.newPix}>
          <span>Novo</span>
        </div>
      )}
      <div className={styles.content}>
        <strong>1</strong>

        <CardInfo title="REMETENTE" data="Ronald Richards" />
        <CardInfo title="Destinário" data="Ronald Richards" />
        <CardInfo title="Data" data="Hoje" />
        <CardInfo title="Valor" data="10,00" />

        <strong className={send ? styles.send : styles.received}>
          {send ? "EMVIADO" : "RECEBIDO"}
        </strong>
      </div>
    </div>
  );
}

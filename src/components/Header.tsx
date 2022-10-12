import styles from "./Header.module.css";

import { ArrowLeft } from "phosphor-react";

import logoPix from "../assets/logo-pix.svg";

interface HeaderProps {
  showButton: boolean;
}

export function Header({ showButton = true }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src={logoPix} alt="Logotipo do Pix" />
        {showButton && (
          <button>
            <ArrowLeft size={24} />
          </button>
        )}
      </div>
    </header>
  );
}

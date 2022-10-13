import styles from "./Sidebar.module.css";

interface SidebarProps {
  onFilter: () => void;
  setUserFilter: (value: string) => void;
}

export function Sidebar({ setUserFilter, onFilter }: SidebarProps) {
  return (
    <header className={styles.sidebar}>
      <div className={styles.content}>
        <h1>PIX</h1>
        <nav className={styles.navlink}>
          <div>
            <label htmlFor="id-user">ID: </label>
            <input
              id="id-user"
              name="id-user"
              placeholder="Digite o ID do usuário aqui..."
              onChange={(e) => setUserFilter(e.target.value)}
            />
          </div>
          <a className={styles.active} href="#">
            Todos
          </a>
          <a href="#">Recebidos</a>
          <a href="#">Enviados</a>
        </nav>

        <button onClick={() => onFilter()}></button>
      </div>
    </header>
  );
}

import styles from './styles.module.css'

type SidebarProps = {
  open: boolean
}

export function Sidebar({ open }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${open ? '' : styles.isHidden}`}>
      <nav className={styles.mainMenu}>
        <ul>
          <li className={styles.navItem}>
            <a
              href="#"
              className={styles.navLink}
              data-active="true"
            >
              Dashboard
            </a>
          </li>

          <li className={styles.navItem}>
            <a
              href="#"
              className={styles.navLink}
            >
              Campeonatos
            </a>
          </li>

          <li className={styles.navItem}>
            <a
              href="#"
              className={styles.navLink}
            >
              Estatísticas
            </a>
            <ul>
              <li className={styles.navItem}>
                <a
                  href="#"
                  className={styles.navLink}
                >
                  Jogadores
                </a>
              </li>

              <li className={styles.navItem}>
                <a
                  href="#"
                  className={styles.navLink}
                >
                  Campeonatos
                </a>
              </li>

              <li className={styles.navItem}>
                <a
                  href="#"
                  className={styles.navLink}
                >
                  Times
                </a>
              </li>
            </ul>
          </li>

          <li className={styles.navItem}>
            <a
              href="#"
              className={styles.navLink}
            >
              Usuários
            </a>
          </li>

          <li className={styles.navItem}>
            <a
              href="#"
              className={styles.navLink}
            >
              Configurações
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

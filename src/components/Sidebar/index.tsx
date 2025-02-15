import styles from './styles.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
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
              Posts
            </a>
            <ul>
              <li className={styles.navItem}>
                <a
                  href="#"
                  className={styles.navLink}
                >
                  Novo post
                </a>
              </li>

              <li className={styles.navItem}>
                <a
                  href="#"
                  className={styles.navLink}
                >
                  Categorias
                </a>
              </li>

              <li className={styles.navItem}>
                <a
                  href="#"
                  className={styles.navLink}
                >
                  Tags
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

import Bars from '@static/images/bars.svg'
import Profile from '@static/images/profile.webp'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <button
          className={styles.toggleMenu}
          aria-label="Abrir menu"
        >
          <img
            src={Bars}
            width={20}
            height={17}
            alt=""
          />
        </button>

        <a href="#">
          <h1>Federação Paulista</h1>
        </a>
      </div>

      <div className={styles.profile}>
        <img
          src={Profile}
          width={56}
          height={56}
          alt="Rodrigo Fontes"
        />
      </div>
    </header>
  )
}

import Bars from '@static/images/bars.svg'
import Logo from '@static/images/logo.svg'
import Profile from '@static/images/profile.webp'

import styles from './styles.module.css'

type HeaderProps = {
  onToggleSidebar: VoidFunction
}

export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button
          className={styles.toggleSidebar}
          aria-label="Abrir menu"
          onClick={onToggleSidebar}
        >
          <img
            src={Bars}
            width={20}
            height={17}
            alt=""
            aria-hidden={true}
          />
        </button>

        <div className={styles.logo}>
          <a href="#">
            <img
              src={Logo}
              width={32}
              height={32}
              alt="SportCenter"
            />
            <h1 aria-hidden={true}>SportCenter</h1>
          </a>
        </div>
      </div>

      <div className={styles.avatar}>
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

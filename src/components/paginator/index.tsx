import styles from './styles.module.css'

export function Paginator() {
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationTotal}>Mostrando 2 de 100 usuários</div>
      <div className={styles.paginator}>
        <span className={styles.first}>&laquo;</span>
        <a
          href="#"
          className={styles.prev}
        >
          &lsaquo;
        </a>
        {[1, 2, 3, 4].map((page) => (
          <a
            href="#"
            key={page}
            data-current={page === 1}
          >
            {page}
          </a>
        ))}
        <a
          href="#"
          className={styles.next}
        >
          &rsaquo;
        </a>
        <a
          href="#"
          className={styles.last}
        >
          &raquo;
        </a>
      </div>
    </div>
  )
}

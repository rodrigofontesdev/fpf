import { Header } from '@components/header'
import { Sidebar } from '@components/sidebar'
import { UserCard } from '@components/user-card'
import { Paginator } from '@components/paginator'

import styles from './styles.module.css'

import Search from '@static/images/search.svg'

const users = [
  {
    id: 1,
    avatar: 'https://placehold.co/600x800',
    name: 'Milena Silvana Moura',
    cpf: 17706229009,
    age: 29,
    birth: '1995-12-10',
    status: 'pending',
    email: 'milena@example.com',
    phone: 42998199945,
    address: {
      street: 'Rua Dario Borges de Lis',
      streetNumber: 995,
      neighborhood: 'São Cristóvão',
      city: 'Guarapuava',
      state: 'PR',
      zipcode: 85063480,
    },
  },
  {
    id: 2,
    avatar: 'https://placehold.co/600x800',
    name: 'Vinicius Cláudio Mendes',
    cpf: 36128447929,
    age: 25,
    birth: '2000-01-17',
    status: 'approved',
    email: 'vinicius@example.com',
    phone: 83983005611,
    address: {
      street: 'Rua Salvino Figueiredo Neto',
      streetNumber: 456,
      neighborhood: 'Jardim Paulistano',
      city: 'Campina Grande',
      state: 'PB',
      zipcode: 58415002,
    },
  },
]

export function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className={styles.main}>
        <section className={styles.app}>
          <form className={styles.filterOptions}>
            <div className={styles.search}>
              <div className={styles.inputGroup}>
                <label htmlFor="search">Buscar</label>
                <input
                  type="search"
                  name="s"
                  id="search"
                  placeholder="Buscar usuário"
                />
                <button
                  type="submit"
                  aria-label="Buscar"
                >
                  <img
                    src={Search}
                    alt=""
                  />
                </button>
              </div>

              <button className={styles.newEntry}>Criar usuário</button>
            </div>

            <div className={styles.filter}>
              <select
                name=""
                id=""
              >
                <option
                  value=""
                  selected
                  disabled
                >
                  Status
                </option>
                <option value="approved">Aprovado</option>
                <option value="pending">Análise pendente</option>
                <option value="inactive">Inativo</option>
              </select>
            </div>
          </form>

          <div className={styles.userCards}>
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
              />
            ))}
          </div>

          <Paginator />
        </section>
      </main>
    </>
  )
}

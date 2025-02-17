import { Button } from '@components/button'
import { Header } from '@components/header'
import { InputGroup } from '@components/input-group'
import { Modal } from '@components/modal'
import { Paginator } from '@components/paginator'
import { Sidebar } from '@components/sidebar'
import { UserCard } from '@components/user-card'
import { useState } from 'react'

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
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

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

              <Button
                className={styles.newEntry}
                onClick={handleOpenModal}
              >
                Criar usuário
              </Button>
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

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className={styles.modalCreateUser}>
            <form className={styles.formCreateUser}>
              <div className={styles.avatar}>
                <img
                  src="https://placehold.co/80x80"
                  width={80}
                  height={80}
                  alt="Foto de perfil do novo usuário"
                />

                <InputGroup.Root>
                  <InputGroup.Label htmlFor="avatar">Carregar avatar</InputGroup.Label>
                  <InputGroup.Input
                    type="file"
                    inputId="avatar"
                  />
                </InputGroup.Root>
              </div>

              <InputGroup.Root>
                <InputGroup.Label htmlFor="name">Nome</InputGroup.Label>
                <InputGroup.Input
                  inputId="name"
                  placeholder="Nome completo"
                />
              </InputGroup.Root>

              <InputGroup.Root>
                <InputGroup.Label htmlFor="email">E-mail</InputGroup.Label>
                <InputGroup.Input
                  type="email"
                  inputId="email"
                  placeholder="E-mail do usuário"
                />
              </InputGroup.Root>

              <InputGroup.Root>
                <InputGroup.Label htmlFor="phone">Telefone</InputGroup.Label>
                <InputGroup.Input
                  type="tel"
                  inputId="phone"
                  placeholder="DDD + Número"
                />
              </InputGroup.Root>

              <InputGroup.Root>
                <InputGroup.Label htmlFor="birth">Data de nascimento</InputGroup.Label>
                <InputGroup.Input
                  type="text"
                  inputId="birth"
                  placeholder="DD/MM/AAAA"
                />
              </InputGroup.Root>

              <InputGroup.Root>
                <InputGroup.Label htmlFor="genre">Gênero</InputGroup.Label>
                <InputGroup.Select inputId="genre">
                  <option
                    selected
                    disabled
                  >
                    Selecionar gênero
                  </option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                  <option value="non-binary">Não binário</option>
                  <option value="none">Prefiro não informar</option>
                </InputGroup.Select>
              </InputGroup.Root>

              <InputGroup.Root>
                <InputGroup.Label htmlFor="zipcode">CEP</InputGroup.Label>
                <InputGroup.Input
                  type="text"
                  inputId="zipcode"
                  placeholder="00000-000"
                />
              </InputGroup.Root>

              <div className={styles.twoColumns}>
                <InputGroup.Root>
                  <InputGroup.Label htmlFor="street">Rua</InputGroup.Label>
                  <InputGroup.Input
                    type="text"
                    inputId="street"
                    placeholder="Rua"
                  />
                </InputGroup.Root>

                <InputGroup.Root>
                  <InputGroup.Label htmlFor="street_number">Número</InputGroup.Label>
                  <InputGroup.Input
                    type="text"
                    inputId="street_number"
                    placeholder="Número"
                  />
                </InputGroup.Root>
              </div>

              <div className={styles.twoColumns}>
                <InputGroup.Root>
                  <InputGroup.Label htmlFor="complement">Complemento</InputGroup.Label>
                  <InputGroup.Input
                    type="text"
                    inputId="complement"
                    placeholder="Complemento"
                  />
                </InputGroup.Root>

                <InputGroup.Root>
                  <InputGroup.Label htmlFor="neighborhood">Bairro</InputGroup.Label>
                  <InputGroup.Input
                    type="text"
                    inputId="neighborhood"
                    placeholder="Bairro"
                  />
                </InputGroup.Root>
              </div>

              <div className={styles.twoColumns}>
                <InputGroup.Root>
                  <InputGroup.Label htmlFor="city">Cidade</InputGroup.Label>
                  <InputGroup.Input
                    type="text"
                    inputId="city"
                    placeholder="Cidade"
                  />
                </InputGroup.Root>

                <InputGroup.Root>
                  <InputGroup.Label htmlFor="state">Estado</InputGroup.Label>
                  <InputGroup.Select inputId="state">
                    <option
                      selected
                      disabled
                    >
                      Selecionar estado
                    </option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </InputGroup.Select>
                </InputGroup.Root>
              </div>
            </form>
          </div>

          <div className={styles.modalCreateUser__Footer}>
            <Button onClick={handleCloseModal}>Cancelar</Button>
            <Button type="submit">Salvar</Button>
          </div>
        </Modal>
      )}
    </>
  )
}

import { Button } from '@components/button'
import { Header } from '@components/Header'
import { InputGroup } from '@components/input-group'
import { Modal } from '@components/modal'
import { Paginator } from '@components/paginator'
import { Sidebar } from '@components/Sidebar'
import { UserCard } from '@components/user-card'
import { useState } from 'react'
import { USERS } from './utils/data'

import styles from './styles.module.css'

import Search from '@static/images/search.svg'

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  function handleToggleSidebar() {
    setIsSidebarOpen((prevState) => !prevState)
  }

  return (
    <>
      <Header onToggleSidebar={handleToggleSidebar} />
      <Sidebar open={isSidebarOpen} />
      <main className={styles.main}>
        <section className={styles.app}>
          <form className={styles.filterOptions}>
            <div className={styles.search}>
              <div className={styles.searchInput}>
                <label htmlFor="s">Buscar</label>
                <input
                  type="search"
                  name="s"
                  id="s"
                  placeholder="Buscar usuário"
                />
                <Button
                  type="submit"
                  aria-label="Buscar"
                >
                  <img
                    src={Search}
                    alt=""
                    aria-hidden={true}
                  />
                </Button>
              </div>

              <Button onClick={handleOpenModal}>Criar usuário</Button>
            </div>

            <div className={styles.filter}>
              <span>Filtrar: </span>

              <InputGroup.Root>
                <InputGroup.Select inputId="status">
                  <option selected>Selecionar status</option>
                  <option value="approved">Aprovado</option>
                  <option value="pending">Análise pendente</option>
                  <option value="inactive">Inativo</option>
                </InputGroup.Select>
              </InputGroup.Root>
            </div>
          </form>

          <div className={styles.userCards}>
            {USERS.map((user) => (
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
            <Button
              appearance="secondary"
              onClick={handleCloseModal}
            >
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </div>
        </Modal>
      )}
    </>
  )
}

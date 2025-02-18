import { Button } from '@components/button'
import { format } from '@utils/formatter'

import styles from './styles.module.css'

type User = {
  id: number
  avatar: string
  name: string
  cpf: string
  age: number
  birth: string
  status: string
  email: string
  phone: string
  address: {
    street: string
    streetNumber: number
    neighborhood: string
    city: string
    state: string
    zipcode: string
  }
}

type UserCardProps = {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  const { avatar, name, birth, status, cpf, age, email, phone, address } = user

  return (
    <article className={styles.card}>
      <div className={styles.cardAvatar}>
        <img
          src={avatar}
          width={600}
          height={800}
          alt={`Foto de perfil de ${name}`}
        />
        <p>
          <b>Status</b> <span>{format.status(status)}</span>
        </p>
        <p>
          <b>E-mail</b>
          <span className={styles.cardMetadata__email}>{email}</span>
        </p>
      </div>

      <div className={styles.cardInfo}>
        <h3>{name}</h3>
        <p>
          <b>CPF</b>
          <span>{cpf}</span>
        </p>
        <p>
          <b>Idade</b>
          <span>{age} anos</span>
        </p>
        <p>
          <b>Nascimento</b> <span>{birth}</span>
        </p>
        <p>
          <b>Telefone</b>
          <span>{phone}</span>
        </p>
        <p>
          <b>Endereço</b>
          <span>
            {address.street}, {address.streetNumber} <br />
            {address.neighborhood}, {address.city} - {address.state} <br />
            {address.zipcode}
          </span>
        </p>
      </div>

      <div className={styles.cardFooter}>
        <Button>Ver perfil</Button>
      </div>
    </article>
  )
}

import styles from './styles.module.css'

type ButtonProps = {
  children: React.ReactNode
} & React.ComponentProps<'button'>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className={styles.button}
      {...props}
    >
      {children}
    </button>
  )
}

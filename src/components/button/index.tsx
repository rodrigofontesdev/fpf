import styles from './styles.module.css'

type ButtonProps = {
  children: React.ReactNode
  appearance?: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export function Button({ children, appearance = 'primary', ...props }: ButtonProps) {
  const appearanceClass = appearance === 'primary' ? styles.primaryButton : styles.secondaryButton

  return (
    <button
      className={`${styles.button} ${appearanceClass}`}
      {...props}
    >
      {children}
    </button>
  )
}

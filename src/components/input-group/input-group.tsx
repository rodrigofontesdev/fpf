import styles from './styles.module.css'

type RootProps = {
  children: React.ReactNode
}

type LabelProps = {
  children: React.ReactNode
} & React.ComponentProps<'label'>

type InputProps = {
  inputId: string
} & Omit<React.ComponentProps<'input'>, 'id' | 'name'>

type SelectProps = {
  inputId: string
} & Omit<React.ComponentProps<'select'>, 'id' | 'name'>

type ErrorProps = {
  message?: string
}

function Root({ children }: RootProps) {
  return <div className={styles.inputGroup}>{children}</div>
}

function Label({ children, ...props }: LabelProps) {
  return (
    <label
      className={styles.inputLabel}
      {...props}
    >
      {children}
    </label>
  )
}

function Input({ inputId, ...props }: InputProps) {
  return (
    <input
      id={inputId}
      name={inputId}
      className={styles.inputControl}
      {...props}
    />
  )
}

function Select({ children, inputId, ...props }: SelectProps) {
  return (
    <select
      id={inputId}
      name={inputId}
      className={styles.selectControl}
      {...props}
    >
      {children}
    </select>
  )
}

function Error({ message }: ErrorProps) {
  return (
    <p
      className={styles.inputError}
      role="alert"
    >
      {message}
    </p>
  )
}

Root.displayName = 'InputGroup.Root'
Label.displayName = 'InputGroup.Label'
Input.displayName = 'InputGroup.Input'
Select.displayName = 'InputGroup.Select'
Error.displayName = 'InputGroup.Error'

export { Error, Input, Select, Label, Root }

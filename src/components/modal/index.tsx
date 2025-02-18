import { useEffect, useRef } from 'react'

import styles from './styles.module.css'

import X from '@static/images/x.svg'

type ModalProps = {
  children: React.ReactNode
  onClose: VoidFunction
}

export function Modal({ children, onClose }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current?.focus()
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className={styles.modal}>
      <div
        className={styles.backdrop}
        onClick={onClose}
      />

      <div
        className={styles.container}
        tabIndex={0}
        ref={containerRef}
        role="dialog"
        aria-modal={true}
        aria-labelledby="modal-title"
      >
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 id="modal-title">Cadastrar usuário</h2>

            <button
              aria-label="Fechar"
              onClick={onClose}
            >
              <img
                src={X}
                alt=""
                aria-hidden={true}
              />
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}

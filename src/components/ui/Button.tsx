import type { ButtonProps } from '../../types/ButtonProps'

function Button({ label, className, disabled = false }: ButtonProps) {
  return (
    <button
      className={className}
      disabled={disabled}>
      {label}
    </button>
  )
}

export default Button
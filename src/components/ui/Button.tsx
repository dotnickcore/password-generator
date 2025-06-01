import type { ButtonProps } from '../../types/ButtonProps'

function Button({ label, className, disabled = false, onClick }: ButtonProps) {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
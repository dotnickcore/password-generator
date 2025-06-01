import type { ContainerProps } from '../../types/ContainerProps'

function Container({ className, children }: ContainerProps) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Container
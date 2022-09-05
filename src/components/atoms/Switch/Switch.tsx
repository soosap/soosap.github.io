import clsx from 'clsx'
import styles from './Switch.module.scss'

export interface Props {
  className?: string
}

const Switch = ({ className }: Props) => {
  return (
    <input
      className={clsx(
        className,
        styles.switch,
        'absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
      )}
      type="checkbox"
    />
  )
}

export default Switch

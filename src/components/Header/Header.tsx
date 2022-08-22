import clsx from 'clsx'
import styles from './Header.module.scss'

interface Props {
  className?: string
}

function Header({ className }: Props) {
  return (
    <header className={clsx(styles.wrapper, className)}>
      <a href="/">English</a>
      <a href="/"> தமிழ்</a>
    </header>
  )
} 

export default Header
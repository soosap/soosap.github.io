import clsx from 'clsx'
import styles from './ThemeSwitch.module.scss'

export interface Props {
  className?: string
}

const ThemeSwitch = ({ className }: Props) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <span className={styles.icon}>🌞</span>
      <label className={styles.switch} htmlFor="switch">
        <input id="switch" type="checkbox" />
        <div className={styles.slider} />
      </label>
      <span className={styles.icon}>🌒</span>
    </div>
  )
}

export default ThemeSwitch

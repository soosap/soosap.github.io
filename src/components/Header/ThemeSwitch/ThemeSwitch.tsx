import clsx from 'clsx'
import { ChangeEventHandler, useEffect } from 'react'
import styles from './ThemeSwitch.module.scss'

export interface Props {
  className?: string
}

const ThemeSwitch = ({ className }: Props) => {
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (!theme) {
      setLight()
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [])

  const setDark = () => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  const setLight = () => {
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
  }

  const handleSwitch: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      setDark()
    } else {
      setLight()
    }
  }

  return (
    <div
      className={clsx(
        styles.wrapper,
        className,
        'flex flex-1 items-center gap-2'
      )}
    >
      <span className={styles.icon}>🌞</span>
      <label className={styles.switch} htmlFor="switch">
        <input id="switch" type="checkbox" onChange={handleSwitch} />
        <div className={styles.slider} />
      </label>
      <span className={styles.icon}>🌒</span>
    </div>
  )
}

export default ThemeSwitch

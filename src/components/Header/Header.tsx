import clsx from 'clsx'
import LanguageSwitch from './LanguageSwitch'
import ThemeSwitch from './ThemeSwitch'

export interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <ThemeSwitch />
      <LanguageSwitch />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default Header

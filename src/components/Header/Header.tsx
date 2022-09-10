import clsx from 'clsx'
import LanguageSwitch from './LanguageSwitch'
import ThemeSwitch from './ThemeSwitch'

export interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        'container flex mx-auto px-4 py-2 sm:py-4 md:py-6'
      )}
    >
      <ThemeSwitch />
      <LanguageSwitch />
    </div>
  )
}

export default Header

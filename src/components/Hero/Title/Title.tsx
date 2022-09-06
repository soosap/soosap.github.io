import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <div
      className={clsx(
        className,
        'flex justify-center',
        'font-accent font-bold',
        'text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl',
        '-rotate-3'
      )}
    >
      {t('Hero.title')}
    </div>
  )
}

export default Title

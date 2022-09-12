import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import Typed from 'react-typed'
import Avatar from './Avatar'
import Title from './Title'

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(className, 'container mx-auto px-4')}>
      <Avatar />
      <Title />
      <Typed
        strings={[
          t('Hero.subtitle.reactDev'),
          t('Hero.subtitle.cricketPlayer'),
          t('Hero.subtitle.hobbyPhotographer'),
        ]}
        typeSpeed={30}
        className={clsx(
          'flex justify-center',
          'text-xl md:text-3xl xl:text-4xl',
          'text-yellow-600 md:text-emerald-800'
        )}
        loop
      />
    </div>
  )
}

export default Hero

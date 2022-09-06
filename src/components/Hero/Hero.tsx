import clsx from 'clsx'
import Avatar from './Avatar'
import Title from './Title'

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'container mx-auto px-4')}>
      <Avatar />
      <Title />
    </div>
  )
}

export default Hero

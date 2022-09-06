import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return <div className={clsx('flex', className)}>AvatarImage</div>
}

export default Avatar

import clsx from 'clsx'

export interface Props {
  className?: string
}

const Switch = ({ className }: Props) => {
  return <input className={clsx(className)} type="checkbox" />
}

export default Switch

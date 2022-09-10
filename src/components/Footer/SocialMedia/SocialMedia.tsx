import clsx from 'clsx'

export interface Props {
  className?: string
}

const SocialMedia = ({ className }: Props) => {
  return (
    <ul className={clsx(className)}>
      <li>
        <a href="https://www.github.com/soosap">Github</a>
      </li>
      <li>
        <a href="https://www.facebook.com/soosap">Facebook</a>
      </li>
    </ul>
  )
}

export default SocialMedia

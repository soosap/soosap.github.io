import clsx from 'clsx'

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'container mx-auto px-4 py-8')}>
      <div>
        <div>UKI Coding School</div>
        <div>Cohorte 2022</div>
        <div>XYZ Road 199</div>
        <div>Jaffna, Sri Lanka</div>
      </div>
      <ul>
        <li>
          <a href="https://www.github.com/soosap">Github</a>
        </li>
        <li>
          <a href="https://www.facebook.com/soosap">Facebook</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer

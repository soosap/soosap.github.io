import clsx from 'clsx'

export interface Props {
  className?: string
}

const ThemeSwitch = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className={clsx(
          'toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
        )}
      />
    </div>
  )
}

export default ThemeSwitch

import clsx from 'clsx'
import styles from './ThemeSwitch.module.scss';

export interface Props {
  className?: string
}

const ThemeSwitch = ({ className }: Props) => {
  return (
    <div className={clsx(styles.container, className)}>
      <span>ThemeSwitch</span>
    </div>
  );
};

export default ThemeSwitch;

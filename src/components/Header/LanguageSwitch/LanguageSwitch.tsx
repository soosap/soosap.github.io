import clsx from 'clsx'
import styles from './LanguageSwitch.module.scss';

export interface Props {
  className?: string
}

const LanguageSwitch = ({ className }: Props) => {
  return (
    <div className={clsx(styles.container, className)}>
      <span>LanguageSwitch</span>
    </div>
  );
};

export default LanguageSwitch;

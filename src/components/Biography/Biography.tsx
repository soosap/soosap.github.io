import clsx from 'clsx'
import styles from './Biography.module.scss';

export interface Props {
  className?: string
}

const Biography = ({ className }: Props) => {
  return (
    <div className={clsx(styles.container, className)}>
      <span>Biography</span>
    </div>
  );
};

export default Biography;

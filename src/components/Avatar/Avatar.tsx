import clsx from 'clsx'
import styles from './Avatar.module.scss';

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx(styles.container, className)}>
      <span>Avatar</span>
    </div>
  );
};

export default Avatar;

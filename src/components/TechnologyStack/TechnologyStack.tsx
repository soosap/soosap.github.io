import clsx from 'clsx'
import styles from './TechnologyStack.module.scss';

export interface Props {
  className?: string
}

const TechnologyStack = ({ className }: Props) => {
  return (
    <div className={clsx(styles.container, className)}>
      <span>TechnologyStack</span>
    </div>
  );
};

export default TechnologyStack;

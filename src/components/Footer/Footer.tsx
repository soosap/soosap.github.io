import clsx from 'clsx'
import styles from './Footer.module.scss';

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <div className={clsx(styles.container, className)}>
      <span>Footer</span>
    </div>
  );
};

export default Footer;

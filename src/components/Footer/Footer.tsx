import clsx from 'clsx'
import styles from './Footer.module.scss';

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.address}>
        <div>UKI Coding School</div>
        <div>Cohorte 2022</div>
        <div>XYZ Road 199</div>
        <div>Jaffna, Sri Lanka</div>
      </div>
      <ul className={styles.social}>
        <li><a href="https://www.github.com/soosap">Github</a></li>
        <li><a href="https://www.facebook.com/soosap">Facebook</a></li>
      </ul>
    </div>
  );
};

export default Footer;

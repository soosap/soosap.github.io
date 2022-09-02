import clsx from 'clsx'
import styles from './ContactForm.module.scss';

export interface Props {
  className?: string
}

const ContactForm = ({ className }: Props) => {
  return (
    <div className={clsx(styles.container, className)}>
      <span>ContactForm</span>
    </div>
  );
};

export default ContactForm;

import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import styles from './Avatar.module.scss';

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(styles.container, className)}>
      <span>AvatarImage</span>
      <div>{t('name')}</div>
    </div>
  );
};

export default Avatar;

import clsx from 'clsx';
import styles from './Header.module.scss';
import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';

export interface Props {
	className?: string;
}

const Header = ({ className }: Props) => {
	return (
		<div className={clsx(styles.container, className)}>
			<ThemeSwitch />
			<LanguageSwitch />
		</div>
	);
};

export default Header;

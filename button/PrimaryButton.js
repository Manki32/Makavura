import { withClasses } from 'helpers/stylesheet';
import Button from './Button';
import Style from './Button.module.css';

const PrimaryButton = ({className = '', children = null, ...attributes}) => (
	<Button className={withClasses(Style.PrimaryButton, className)} {...attributes}>
		{children}
	</Button>
);

export default PrimaryButton;
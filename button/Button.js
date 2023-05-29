import { withClasses } from 'helpers/stylesheet';
import Style from './Button.module.css';

const Button = ({className = '', children = null, ...attributes}) => (
	<button className={withClasses(Style.Button, className)} {...attributes}>
		{children}
	</button>
);

export default Button;

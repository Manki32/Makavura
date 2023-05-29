import { withClasses } from 'helpers/stylesheet';
import Style from './Spinner.module.css';

export const Pulse = ({className = ''}) => (
	<div className={withClasses(Style.Pulse, className)}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
);
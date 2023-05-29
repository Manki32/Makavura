import { withClasses } from 'helpers/stylesheet';
import Style from './ToggleButton.module.css';

const ToggleButton = ({className = '', ...attributes}) => (
    <label className={withClasses(Style.ToggleButton, className)}>
        <input type="checkbox" {...attributes}/>
        <span></span>
    </label>
);

export default ToggleButton;
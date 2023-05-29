import { withClasses } from 'helpers/stylesheet';
import Style from './RadioButton.module.css';

const RadioButton = ({id, children, className = '', ...attributes}) =>  (
    <div className={withClasses(Style.RadioButton, className)}>
        <input type="radio" id={id} {...attributes}/>
        <label htmlFor={id}>
            {children || attributes.label}
        </label>
    </div>
);

export default RadioButton;
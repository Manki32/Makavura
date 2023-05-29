import { withClasses } from 'helpers/stylesheet';
import Style from './TextInput.module.css';

const TextInput = ({id, baseRef, label, invalid, className = '', ...attributes}) => (
    <div className={withClasses(Style.InputContainer, className)} invalid={invalid}>
        <input id={id} ref={baseRef} placeholder={label} {...attributes}/>
        <label htmlFor={id}>
            {label}
        </label>
    </div>
);

export default TextInput;
import { Fragment, useState } from 'react';
import { withClasses } from 'helpers/stylesheet';
import Style from './Dropdown.module.css';

const Dropdown = ({className, children, data = [], onChange}) => {
	const [isOpen, setOpen] = useState(false);

	const handleSelection = (data) => {
		setOpen(false);

		if (onChange instanceof Function) {
			onChange(data);
		}
	};

	return (
		<div className={withClasses(Style.Dropdown, className)}>
			<div className={withClasses(Style.Opener, (isOpen) ? Style.Active : null)} onClick={() => setOpen((prevState) => !prevState)}>
				{children}
			</div>
			{isOpen &&
				<Fragment>
					<div className={Style.Backdrop} onClick={() => setOpen(false)}></div>
					<ul className={Style.List}>
						{data.map((itemData, index) => (
							<li key={index} onClick={() => handleSelection(itemData)}>
								{itemData.component}
							</li>
						))}
					</ul>
				</Fragment>
			}
		</div>
	);
};

export default Dropdown;
import { ReactComponent as CrossIcon } from 'assets/images/cross.svg';
import Style from './Modal.module.css';

const Modal = (props) => (
	<div className={Style.Backdrop}>
		<div className={Style.Modal}>
			<header className={Style.Header}>
				<h1 className={Style.Title}>{props.title}</h1>
				<CrossIcon className={Style.CloseButton} onClick={props.onclose}/>
			</header>
			<main className={Style.ContentContainer}>
				{props.children}
			</main>
		</div>
	</div>
);

export default Modal;

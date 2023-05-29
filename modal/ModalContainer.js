import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from 'stores/modal';
import withModal from 'hoc/withModal';

const ModalContainer = () => {
	const dispatch = useDispatch();
	const modalsData = useSelector(state => state.modal.data);

	return modalsData.map(data => {
		const {component, onclose, ...attributes} = data;
		const ModalComponent = withModal(component);
		const closeModalHandler = () => {
			if (typeof onclose === 'function') {
				onclose();
			}

			dispatch(modalActions.closeDialog(data.id));
		};

		return ReactDOM.createPortal(
			<ModalComponent key={data.id} onclose={closeModalHandler} {...attributes} />,
			document.querySelector('#modalContainer')
		);
	});
};

export default ModalContainer;
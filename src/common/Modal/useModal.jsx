import { Button, Wrapper } from './modal.styled';
import { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';

export default function useModal(isDisplayClose = false, zIndex = 999) {
	const [content, setContent] = useState(null);

	const modal = useMemo(() => {
		const bodyStyle = document.body.style;
		content ? (bodyStyle.overflow = 'hidden') : (bodyStyle.overflow = 'auto');

		function closeModal() {
			setContent(null);
		}
		return (
			content &&
			ReactDOM.createPortal(
				<Wrapper onClick={closeModal} zIndex={zIndex}>
					{content}
					{isDisplayClose && <Button onClick={closeModal}>Х</Button>}
				</Wrapper>,
				document.body
			)
		);
	}, [content, isDisplayClose, zIndex]);

	return [modal, setContent];
}

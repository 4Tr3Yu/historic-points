import { Button, Dialog, DialogPanel } from '@tremor/react';
import React from 'react';

const Modal = ({buttonText ,children}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<div className="flex justify-center ">
			<button
				className="flex items-center justify-center rounded-lg border border-tremor-border bg-tremor-background px-2.5 py-2 text-tremor-default font-medium text-tremor-content-strong shadow-tremor-input hover:bg-tremor-background-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-content-strong dark:shadow-dark-tremor-input hover:dark:bg-dark-tremor-background-muted"
				onClick={() => setIsOpen(true)}
			>
				{buttonText ? buttonText : 'Agregar'}
			</button>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				static={true}
				className="z-[100] border-orange-400 rounded-lg"
			>
				<DialogPanel className="max-w-sm text-white bg-orange-700 bg-opacity-20 ">
					{children}
				<Button
					variant="light"
					className="mx-auto flex items-center border min-w-36 py-2 rounded-lg"
					onClick={() => setIsOpen(false)}
				>
					Close
				</Button>
				</DialogPanel>
			</Dialog>
		</div>
	);
}
export default Modal;
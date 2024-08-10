import { Button, Dialog, DialogPanel } from '@tremor/react';
import React from 'react';

const Modal = ({buttonText ,children}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<div className="flex justify-center border-none shadow-none ">
			<button
				type="button"
				className="border-amber-200 shadow-sm text-lg rounded-md text-white bg-amber-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 py-2 px-4 -mt-2 font-bold"
				onClick={() => setIsOpen(true)}
			>
				{buttonText ? buttonText : 'Agregar'}
			</button>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				static={true}
				className="z-[100] border-orange-400 rounded-lg shadow-none"
			>
				<DialogPanel className="max-w-sm text-white bg-black bg-opacity-80">
					{children}
				<Button
					variant="light"
					className="absolute -top-3 -right-3 bg-black border-orange-300 border px-3 py-2 rounded-lg"
					onClick={() => setIsOpen(false)}
				>❌</Button>
				</DialogPanel>
			</Dialog>
			<style>
				{".tremor-dialog-panel {	box-shadow: none !import;}"}
			</style>
		</div>
	);
}
export default Modal;
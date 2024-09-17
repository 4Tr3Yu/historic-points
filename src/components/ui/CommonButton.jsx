export default function CommonButton({ children, onClick, className, ...props }) {
	return (
		<button
			type="button" 
			className={`common-button ${className}`}
			onClick={onClick} >
				{children || 'button'}
		</button>
	)
}
const Footer = () => {
	return (
		<footer className="fixed bottom-0 left-0 flex h-32 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
			<a
				className="pointer-events-none text-xs text-white flex place-items-center gap-2 p-8"
				href="https://www.atre.dev"
				target="_blank"
				rel="noopener noreferrer"
			>
				made with 💓 by <strong>Atre</strong>
			</a>
		</footer>
	);
}

export default Footer;
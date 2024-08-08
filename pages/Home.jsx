const Home = () => {
	return (
		<>
			<nav className="w-full h-full flex flex-col items-center text-white justify-center">
				<a href="/games" className="min-w-72 p-5 border uppercase mb-5 rounded-lg">Listado de juegos</a>
				<a href="/scores" className="min-w-72 p-5 border uppercase mb-5 rounded-lg">Puntajes</a>
				
			</nav>
		</>
	)
}
export default Home;

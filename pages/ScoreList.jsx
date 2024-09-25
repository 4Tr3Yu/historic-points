import BackButton from "../src/components/ui/BackButton";
const ScoreList = () => {
	return (
		<>
			<section className="top flex flex-wrap justify-between px-4 pb-5 mb-5 border-b">
				<BackButton classes="w-full mb-4 opacity-70 hover:opacity-100"/>
				<h2 className="text-3xl md:text-4xl mb-2 gradient-title">Puntajes!</h2>
			</section>
		</>
	)
}
export default ScoreList;

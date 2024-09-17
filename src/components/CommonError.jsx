export default function CommonError({error}) {

	return (
		<div className="flex flex-col justify-center items-center py-8">
			<h2 className="text-pretty text-2xl mb-4"><span className="gradient-title">Tenemos un problema</span> 😟</h2>
			<code className="bg-black/45 border border-black p-8">{error.message}</code>
		</div>
	)
}
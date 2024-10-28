import Link from "next/link";

const Home = () => (
	<div>
		<h1 className="text-center text-xl">Accueil</h1>
		<Link href="/apropos" className="rounded-lg bg-indigo-200 p-4 text-black">
			Page à propos
		</Link>
	</div>
);

export default Home;

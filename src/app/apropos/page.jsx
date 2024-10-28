import Link from "next/link";

const About = () => (
	<>
		<h1 className="text-center text-xl">A propos</h1>
		<p>
			Ce site a été développé en Next.JS avec TailwindCSS. Docker est utilisé
			pour le déploiement et le développement.
		</p>
		<Link href="/" className="rounded-lg bg-indigo-200 p-4 text-black w-fit">
			Page d'accueil
		</Link>
	</>
);

export default About;

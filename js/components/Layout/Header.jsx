import React from "react";
import Link from "next/link"; // Import Link for client-side transitions

export default function Header(props) {
	return (
		<header className="w-full bg-blue-800 text-white p-4 flex justify-between items-center">
			<div className="text-lg font-bold">My Garden Helper</div>
			<nav>
				<div className="flex space-x-4 items-center">
					<div className={'self-center'}>
						<Link href="/">
							<span className="hover:bg-blue-700 px-3 py-2 rounded">Dashboard</span>
						</Link>
					</div>
					<div className={'self-center'}>
						<Link href="/robots">
							<span className="hover:bg-blue-700 px-3 py-2 rounded">Robots</span>
						</Link>
					</div>
					<div className={'self-center'}>
						<Link href="/plants">
							<span className="hover:bg-blue-700 px-3 py-2 rounded">Plants</span>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}

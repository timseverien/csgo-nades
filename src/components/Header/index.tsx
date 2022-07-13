import { FunctionalComponent } from 'preact';

export const Header: FunctionalComponent = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href="/">Nades</a>
					</li>
					<li>
						<a href="/configs">Configs</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

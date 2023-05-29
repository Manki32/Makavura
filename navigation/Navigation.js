import { withClasses } from 'helpers/stylesheet';
import NavLink from './NavLink';
import './navigation.css';

const Navigation = ({className = '', pages}) => (
	<nav className={withClasses('navigation', className)}>
		<ul className="list">
			{pages.map((page) => (
				<li key={page.path}>
					<NavLink to={page.path} className="list-item" activeClassName="selected">
						{page.component}
					</NavLink>
				</li>
			))}
		</ul>
	</nav>
);

export default Navigation;
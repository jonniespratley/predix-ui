import Brand from '../px-brand';
import styles from './index.scss';

// TODO: Use next/link
const Link = ({label, href, children}) => (<a className='c-header__link' title={label} href={href}>
	{children}
</a>);

export default({
	title = 'Header',
	subtitle,
	powered,
	nav = [
		{
			label: 'Home',
			href: '/'
		}
	]
}) => (
	<header className='px-header'>
		<div className='c-header'>
			<div className='c-header__left'>
				<div className='c-header__brand'>
					<span className='c-header__logo'>
						<Brand size='32' color='#FFF'/>
					</span>
				</div>
				<span className='c-header__title epsilon'>
					{title}
				</span>
        { subtitle && <div className='is-hidden@sm-'>
					<span className='c-header__seperator'></span>
          <span className='c-header__subtitle'>{subtitle}</span>
				</div> }
			</div>
			<div className='c-header__right'>
				<nav className='c-header__nav'>
					{nav && nav.map((item, index) => (<Link {...item}>{item.label}</Link>))}
				</nav>
				{ powered && <div className='c-header__powered is-hidden@xs-'>{powered}</div> }
			</div>
		</div>
		<style jsx>{styles}</style>
	</header>
);

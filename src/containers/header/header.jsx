import style from "./header.module.css";

const Header = () => {
	return (
		<header className={style.header}>
			<span> Exo de la todolist</span>
			<span className={style.target}>Web BI</span>
		</header>
	);
};
export default Header;

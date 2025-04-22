import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from './Navigation.module.css';

const Navigation = () => {
    const setActiveClass = ({ isActive }) => {
            return clsx(s.link, isActive && s.active);
    };
    
    return (
        <header>
            <nav className={s.nav}>
                <NavLink className={setActiveClass} to='/'>
                    Home
                </NavLink>
                <NavLink className={setActiveClass} to='/movies'>
                    Movies
                </NavLink>
            </nav>
        </header>
        )
}

export default Navigation;
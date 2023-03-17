import { react } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>React meetups</div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">All Meetups</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-meetup">Add New Meetup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favourites">My Favourites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;

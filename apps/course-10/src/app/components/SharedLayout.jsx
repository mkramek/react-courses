import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { Suspense } from 'react';
import Loading from './Loading';

export default function SharedLayout() {
    return (
        <>
            <nav role="navigation" className={styles.mainMenu}>
                <NavLink replace={true} className={styles.menuItem} to="/">
                    Strona główna
                </NavLink>
                <NavLink replace={true} className={styles.menuItem} to="/about">
                    O nas
                </NavLink>
                <NavLink replace={true} className={styles.menuItem} to="/contact">
                    Kontakt
                </NavLink>
            </nav>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </>
    );
}

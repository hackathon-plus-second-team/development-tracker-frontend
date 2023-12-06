import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import styles from './SharedLayout.module.scss';
import Header from '../Header/Header';

const SharedLayout = () => {
    return (
        <>
            <Header />
            <main className={styles.content}>
                <Sidebar />
                <Outlet />
            </main>
        </>
    );
};
export default SharedLayout;

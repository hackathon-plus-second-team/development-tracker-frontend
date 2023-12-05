import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
const SharedLayout = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
};
export default SharedLayout;

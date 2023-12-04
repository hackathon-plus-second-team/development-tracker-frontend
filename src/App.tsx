import { useEffect } from 'react';
import BasicTabs from './ui-kit/Tab/Tab';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { login } from './store/authSlice';
function App() {
    const { user, token } = useAppSelector((state) => state.auth);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (user) return;
        dispatch(login({ email: 'TestUser@yandex.ru', password: 'ZQj-hBQ-c83-fmu' }));
    }, [user, dispatch]);

    return (
        <>
            <BasicTabs></BasicTabs>
        </>
    );
}

export default App;

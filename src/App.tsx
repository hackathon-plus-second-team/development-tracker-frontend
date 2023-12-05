import { useEffect } from 'react';
import BasicTabs from './ui-kit/Tab/Tab';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { login } from './store/authSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/SharedLayout/SharedLayout';

function App() {
    // @ts-expect-error исправить
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user, token } = useAppSelector((state) => state.auth);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (user) return;
        dispatch(login({ email: 'TestUser@yandex.ru', password: 'ZQj-hBQ-c83-fmu' }));
    }, [user, dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<BasicTabs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { login } from './store/authSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/SharedLayout/SharedLayout';
import { getCourses } from './store/coursesSlice';
import Skills from './Pages/Skiils/Skills';
import Goal from './Pages/Goal/Goal';

function App() {

    const { token } = useAppSelector((state) => state.auth);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (token) return;
        dispatch(login({ email: 'TestUser@yandex.ru', password: 'ZQj-hBQ-c83-fmu' }));
        dispatch(getCourses())
    }, [token, dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Skills/>} />
                    <Route path='/goal' element={<Goal/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

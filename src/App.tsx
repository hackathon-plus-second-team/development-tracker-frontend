import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { login } from './store/authSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/SharedLayout/SharedLayout';
import { getCourses } from './store/coursesSlice';
import Skills from './Pages/Skiils/Skills';
import Test from './Pages/Test/Test';
import Skill from './Pages/Skill/Skill';
import TestResult from './Pages/TestResult/TestResult';

function App() {

    const {token } = useAppSelector((state) => state.auth);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (token) return;
        dispatch(login({ email: 'TestUser@yandex.ru', password: 'ZQj-hBQ-c83-fmu' }));
        dispatch(getCourses());
    }, [token, dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Skills />} />
                    <Route path="skills/:id" element={<Skill />} />
                    <Route path="tests/:id" element={<Test />} />
                    <Route path="/test/result" element={<TestResult />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

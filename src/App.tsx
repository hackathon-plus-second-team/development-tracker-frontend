import { useState, useEffect } from 'react';
import Dropdown from './ui-kit/Dropdown/Dropdown';
import { SelectChangeEvent } from '@mui/material';
import BasicTabs from './ui-kit/Tab/Tab';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { login } from './store/authSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/SharedLayout/SharedLayout';
import { getCourses } from './store/coursesSlice';
import Skills from './Pages/Skiils/Skills';

function App() {
    // dropdown - 26
    const val = [
        { id: 1, label: 'ffdf' },
        { id: 2, label: '333ffdf' },
        { id: 3, label: '2222ffdf' },
    ];

    const [selectedCourse, setSelectedCourse] = useState<string[]>([]);
    const handleCourseChange = (evt: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = evt;

        setSelectedCourse(typeof value === 'string' ? value.split(',') : value);
    };

    // @ts-expect-error исправить
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user, token } = useAppSelector((state) => state.auth);

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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

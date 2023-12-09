import { useState, useEffect } from 'react';
import Dropdown from './ui-kit/Dropdown/Dropdown';
import { SelectChangeEvent } from '@mui/material';
import BasicTabs from './ui-kit/Tab/Tab';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { login } from './store/authSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/SharedLayout/SharedLayout';

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

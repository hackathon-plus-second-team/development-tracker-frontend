import { useState } from 'react';
import Dropdown from './ui-kit/Dropdown/Dropdown';
import { SelectChangeEvent } from '@mui/material';
import { useEffect } from 'react';
import BasicTabs from './ui-kit/Tab/Tab';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { login } from './store/authSlice';





function App() {


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
        <>
            <Dropdown options={val} onChange={handleCourseChange} selectedValues={selectedCourse} placeholder="Все мои навыки" />
        </>
    );
}

export default App;

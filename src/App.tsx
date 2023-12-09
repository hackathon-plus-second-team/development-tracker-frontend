import { useState } from 'react';
import Dropdown from './ui-kit/Dropdown/Dropdown';
import { SelectChangeEvent } from '@mui/material';

const val = [
    { id: 1, label: 'ffdf' },
    { id: 2, label: '333ffdf' },
    { id: 3, label: '2222ffdf' },
];

import BasicTabs from './ui-kit/Tab/Tab';
import ProgressBar from './ui-kit/ProgressBar/ProgressBar';
import Calendar from './ui-kit/Calendar/Calendar';

function App() {
    const [selectedCourse, setSelectedCourse] = useState<string[]>([]);
    const handleCourseChange = (evt: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = evt;

        setSelectedCourse(typeof value === 'string' ? value.split(',') : value);
    };
    return (
        <>
            <Dropdown options={val} onChange={handleCourseChange} selectedValues={selectedCourse} placeholder="Все мои навыки" />
        </>
    );
}

export default App;

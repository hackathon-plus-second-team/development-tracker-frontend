import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


type TValues = {
    id: number;
    lable: string;
};
type TDropdonwProps = {
    values: TValues[];
};

const Dropdown = ({ values }: TDropdonwProps) => {
    const [value, setValue] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };

    return (
        <Select size="small" sx={{ minWidth: '320px'}} inputProps={{ 'aria-label': 'Without label' }} value={value} onChange={handleChange}>
            {values.map(({ id, lable }) => (
                <MenuItem key={id} value={id}>
                    {lable}
                </MenuItem>
            ))}
        </Select>
    );
};
export default Dropdown;

import Select, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
type TValues = {
    id: number;
    lable: string;
};
type TDropdonwProps = {
    options: TValues[];
    selectedValues: string[]
};

const Dropdown = ({ options, selectedValues, ...rest}: TDropdonwProps & SelectProps) => {

    return (
        <Select
        size="small"
        sx={{ minWidth: '320px' }}
        inputProps={{ 'aria-label': 'Without label' }}
        value={selectedValues}
        multiple
        {...rest}
        >
            {options.map(({ id, lable }) => {
                const selected = selectedValues.includes(id.toString())
                return (
                    <MenuItem key={id} value={id}>
                        <ListItemText primary={lable} />
                        {selected && (
                            <ListItemIcon>
                                <CheckIcon />
                            </ListItemIcon>
                        )}
                    </MenuItem>
                );
            })}
        </Select>
    );
};
export default Dropdown;

import Select, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '../../assets/img/check_mini.svg?react';
import ArrowIcon from '../../assets/img/arrow_down.svg?react';
import styles from './Dropdown.module.scss';

type TValues = {
    id: number;
    name: string;
};
type TDropdonwProps = {
    options: TValues[] | null;
    selectedValues: string[];
    placeholder: string;
};

const Dropdown = ({ options, selectedValues, placeholder, ...rest }: TDropdonwProps & SelectProps<string[]>) => {
    return (
        <Select
            size="small"
            sx={{ minWidth: '320px' }}
            multiple
            value={selectedValues}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            IconComponent={(props) => <ArrowIcon {...props} />}
            // MenuProps={{
            //     PaperProps: { sx: { left: `8px !important` } },
            // }}
            renderValue={(values: Array<string>) =>
                values.length ? (
                    values
                        .map((id) => {
                            const selected = options&&options.find((opt) => opt.id.toString() == id);
                            return selected ? selected.name : id;
                        })
                        .join(', ')
                ) : (
                    <em className={styles.placeholder}>{placeholder}</em>
                )
            }
            {...rest}
        >
            {options&&options.map(({ id, name }) => {
                const selected = selectedValues.find((opt) => opt == id.toString());
                return (
                    <MenuItem key={id} value={id}>
                        <ListItemText primary={name} />
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

import { FormControlLabel } from '@mui/material';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import styles from './CustomCheckbox.module.scss';
type TCustomCheckbox = {
    label: string;
};

const CustomCheckbox = ({ label, ...rest }: TCustomCheckbox & CheckboxProps) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    sx={{
                        color: '#797981',
                        '&.checkboxClasses.checked': { color: '#1D6BF3' },
                        '&:hover': { backgroundColor: 'transparent' },
                    }}
                    {...rest}
                />
            }
            label={<span className={styles.label}>{label}</span>}
        />
    );
};
export default CustomCheckbox;

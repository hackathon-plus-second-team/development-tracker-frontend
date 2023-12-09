import { FormControlLabel } from '@mui/material';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import styles from './CustomCheckbox.module.scss';

type TCustomCheckbox = {
    label: string;
};

const CustomCheckbox = ({ label, ...rest }: TCustomCheckbox & CheckboxProps) => {
    return (
        <FormControlLabel
            sx={{
                width: '100%',

                '&:hover .MuiSvgIcon-root': {
                    backgroundColor: 'transparent',
                    outline: '1px solid #1D6BF3',
                    border: 'none',
                },

                '.Mui-disabled .MuiSvgIcon-root': {
                    outline: '1px solid #DDE0E4',
                },
            }}
            control={
                <Checkbox
                    sx={{
                        padding: 0,
                        margin: '0 8px 0 12px',
                        position: 'relative',

                        '& .MuiSvgIcon-root': {
                            color: 'transparent',
                            outline: '1px solid #797981',
                            borderRadius: '4px',
                            width: '24px',
                            height: '24px',
                        },

                        '&.Mui-checked .MuiSvgIcon-root': {
                            backgroundColor: '#1D6BF3',
                            color: 'white',
                            outline: '1px solid #1D6BF3',
                        },
                    }}
                    {...rest}
                />
            }
            label={<span className={styles.label}>{label}</span>}
        />
    );
};
export default CustomCheckbox;

import { FormControlLabel } from '@mui/material';
import Radio, { RadioProps } from '@mui/material/Radio';
import styles from './CustomRadio.module.scss';
type TCustomRadioProps = {
    label: string;
};
const CustomRadio = ({ label, ...rest }: TCustomRadioProps & RadioProps) => {
    return (
        <FormControlLabel
            control={
                <Radio
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
export default CustomRadio;

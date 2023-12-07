import { CircularProgress, Box } from '@mui/material';
import styles from './RoundProgressbar.module.scss';
type TRoundProgressbarProps = {
    value: number;
    label: string;
};

const RoundProgressbar = ({ value, label }: TRoundProgressbarProps) => {
    return (
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '180px', height: '180px' }}>
            <CircularProgress variant="determinate" size={180} sx={{ color: '#FFF', boxShadow: 'inset 0 0 0px 15px gray', borderRadius: '100%', position: 'absolute', left: 0 }} value={100} />
            <CircularProgress variant="determinate" size={180} sx={{ color: value >= 90 ? '#7F67D2' : '#B5B5B7', position: 'absolute', left: 0 }} value={value} />
            <span className={styles.label}>{label}</span>
            <span className={styles.progress}>{value} %</span>
        </Box>
    );
};
export default RoundProgressbar;

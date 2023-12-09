import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { barStyles } from './ProgressBarStyle';
import style from './ProgressBar.module.scss';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

interface ProgressBarInterface {
    value: number;
    skillName: string;
    isCheckbox: boolean;
    isBig: boolean;
}

export default function ProgressBar({ isBig, isCheckbox, value, skillName }: ProgressBarInterface) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: '368px',
                padding: '4px',

                ...(isBig && {
                    justifyContent: 'space-between',

                    '&:hover': {
                        backgroundColor: 'rgba(204, 194, 237, 0.25)',
                        borderRadius: '4px',
                    },

                    '&:hover .css-16ytp48-MuiLinearProgress-root': {
                        border: '1px solid #B5B5B7',
                    },

                    ...(value >= 100 && {
                        '&:hover .MuiLinearProgress-bar ': {
                            backgroundColor: '#87CC9E',
                        },
                    }),

                    ...(value < 100 && {
                        '&:hover .MuiLinearProgress-bar ': {
                            backgroundColor: '#B5B5B7',
                        },
                    }),
                }),
            }}
        >
            {isBig ? (
                isCheckbox ? (
                    <>
                        <CustomCheckbox label={skillName} />

                        <LinearProgress value={value} variant="determinate" sx={value >= 90 ? barStyles.big.full : barStyles.big.progress} />
                        <p className={style.percent}>{value}%</p>
                    </>
                ) : (
                    <>
                        <p className={style.name}>{skillName}</p>
                        <LinearProgress value={value} variant="determinate" sx={value >= 90 ? barStyles.big.full : barStyles.big.progress} />
                        <p className={style.percent}>{value}%</p>
                    </>
                )
            ) : (
                <>
                    <p className={`${style.name} ${style.nameSmall}`}>{skillName}</p>
                    <LinearProgress value={value} variant="determinate" sx={value >= 90 ? barStyles.small.full : barStyles.small.progress} />
                    <p className={`${style.percent} ${style.percentSmall}`}>{value}%</p>
                </>
            )}
        </Box>
    );
}

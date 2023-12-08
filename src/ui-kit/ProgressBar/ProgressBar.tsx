import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { barStyles } from './ProgressBarStyle';
import style from './ProgressBar.module.scss';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface ProgressBarInterface {
    value: number;
    skillName: string;
    skillId?: number;
    isCheckbox: boolean;
    isBig: boolean;
    register?: UseFormRegister<FieldValues>;
}

export default function ProgressBar({ isBig, isCheckbox, value, skillName, skillId, register }: ProgressBarInterface) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: '368px',
                padding: '8px 4px',

                ...(isBig && {
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
                        {/* добавить кастомный чекбокс и лэйбл */}
                        {register ? <CustomCheckbox label={skillName} register={register} skillId={skillId} /> : null}
                        <LinearProgress value={value} variant="determinate" sx={value === 100 ? barStyles.big.full : barStyles.big.progress} />
                        <p className={style.percent}>{value}%</p>
                    </>
                ) : (
                    <>
                        <p className={style.name}>{skillName}</p>
                        <LinearProgress value={value} variant="determinate" sx={value >= 100 ? barStyles.big.full : barStyles.big.progress} />
                        <p className={style.percent}>{value}%</p>
                    </>
                )
            ) : (
                <>
                    <p className={`${style.name} ${style.nameSmall}`}>{skillName}</p>
                    <LinearProgress value={value} variant="determinate" sx={value >= 100 ? barStyles.small.full : barStyles.small.progress} />
                    <p className={`${style.percent} ${style.percentSmall}`}>{value}%</p>
                </>
            )}
        </Box>
    );
}

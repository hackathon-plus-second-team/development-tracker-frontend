import ArrowIcon from '../../assets/img/back.svg?react';
import { TextField } from '@mui/material';
const Goal = () => {
    return (
        <section>
            <div>
                <ArrowIcon />
                <h2>Установи цель развития</h2>
            </div>
            <div>
                <div>
                    <span>Название цели</span>
                    <TextField />
                </div>
                <div>
                <span>Дедлайн</span>

                </div>
            </div>
        </section>
    );
};
export default Goal;

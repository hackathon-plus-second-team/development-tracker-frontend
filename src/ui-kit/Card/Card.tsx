import CustomButton from '../Button/CustomButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Link } from 'react-router-dom';
import styles from "./Card.module.scss"

type TCardProps = {
    goal: boolean;
    label: string;
    deadline: string;
    progressValue: number;
};
const Card = ({ goal, label, deadline, progressValue }: TCardProps) => {
    return (
        <div className={styles.card}>
            <h2>Цель развития</h2>
            {goal ? (
                <>
                    <ProgressBar isCheckbox={false} isBig={false} skillName={label} value={progressValue} />
                    <p>{`Дедлайн ${deadline}`}</p>
                    {/* Не работает без Browser Router */}
                    {/* <Link to="/goal">{"Посмотреть цель"}</Link> */}
                </>
            ) : (
                <>
                    <p>Цель развития Добавь в цель те навыки, которые хочешь прокачать Установить цель</p>
                    {/* <Link to="/setgoal">
                        <CustomButton disabled={false} buttonVariant="contained" text="Установить цель" />
                    </Link> */}
                </>
            )}
        </div>
    );
};
export default Card;

import CustomButton from '../Button/CustomButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

type TCardProps = {
    goal: boolean;
    label: string;
    deadline: string;
    progressValue: number;
};

const Card = ({ goal, label, deadline, progressValue }: TCardProps) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.heading}>Цель развития</h2>
            {goal ? (
                <>
                    <ProgressBar isCheckbox={false} isBig={false} skillName={label} value={progressValue} />
                    <p className={styles.text}>{`Дедлайн ${deadline}`}</p>
                    {/* Не работает без Browser Router */}
                    <Link to="/goal/{id}" className={styles.button}>
                        {'Посмотреть цель'}
                    </Link>
                </>
            ) : (
                <>
                    <p className={styles.text}>Добавь в цель те навыки, которые хочешь прокачать</p>
                    <Link to="/goal">
                        <CustomButton disabled={false} buttonVariant="contained" text="Установить цель" />
                    </Link>
                </>
            )}
        </div>
    );
};
export default Card;

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { getCurrentSkill, getSkill } from '../../store/skillsSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RoundProgressbar from '../../ui-kit/RoundProgressbar/RoundProgressbar';
import CustomButton from '../../ui-kit/Button/CustomButton';
import BackArrow from '../../assets/img/back.svg?react';
import styles from './Skill.module.scss';

const Skill = () => {
    const dispatch = useAppDispatch();
    const skill = useAppSelector(getCurrentSkill);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getSkill(location.pathname.slice(8)));
    }, [dispatch]);

    const btnText = skill && skill.level > 0 ? 'Пройти тест ещё раз' : 'Пройти тест';
    return (
        <section className={styles.skill}>
            {skill ? (
                <>
                    <BackArrow onClick={() => navigate(-1)} className={styles.back} />
                    <div className={styles.textContainer}>
                        <h2 className={styles.heading}>Разработчик</h2>
                        <h3 className={styles.subHeading}>{skill?.name}</h3>
                        <p className={styles.text}>{skill?.description}</p>
                        <div className={styles.btnContainer}>
                            {skill.level < 100 ? (
                                <Link to={`/tests/${skill.level_test}`} state={{ id: skill.level_test }}>
                                    <CustomButton text={btnText} buttonVariant="contained" disabled={false} />
                                </Link>
                            ) : null}
                            <CustomButton text="Прочитать материалы" buttonVariant="outlined" disabled={false} />
                        </div>
                    </div>
                    <RoundProgressbar label="Навыки подтверждены" value={skill.level} />
                </>
            ) : (
                '...Loading'
            )}
        </section>
    );
};
export default Skill;

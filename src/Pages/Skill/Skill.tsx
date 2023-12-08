import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { getCurrentSkill, getSkill } from '../../store/skillsSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import RoundProgressbar from '../../ui-kit/RoundProgressbar/RoundProgressbar';
import CustomButton from '../../ui-kit/Button/CustomButton';
import BackArrow from '../../assets/img/back.svg?react';
import styles from './Skill.module.scss';

const Skill = () => {
    const dispatch = useAppDispatch();
    const skill = useAppSelector(getCurrentSkill);
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getSkill(location.pathname.slice(8)));
    }, [dispatch]);

    return (
        <section className={styles.skill}>
            {skill ? (
                <>
                    <BackArrow onClick={()=> navigate(-1)} className={styles.back}/>
                    <div className={styles.textContainer}>
                        <h2 className={styles.heading}>Разработчик</h2>
                        <h3 className={styles.subHeading}>{skill?.name}</h3>
                        <p className={styles.text}>{skill?.description}</p>
                        <CustomButton text="Пройти тест" buttonVariant="contained" disabled={false} />
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

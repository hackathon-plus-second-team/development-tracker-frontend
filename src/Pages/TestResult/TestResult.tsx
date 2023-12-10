import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { Link, useLocation } from 'react-router-dom';
import RoundProgressbar from '../../ui-kit/RoundProgressbar/RoundProgressbar';
import CustomButton from '../../ui-kit/Button/CustomButton';
import styles from './TestResult.module.scss';
import { getResult, selectResult } from '../../store/testsSlice';

const TestResult = () => {
    const dispatch = useAppDispatch();
    const result = useAppSelector(selectResult);
    const location = useLocation();
    const { id } = location.state;
    const btnText = 'Прочитать материал из курса';

    useEffect(() => {
        dispatch(getResult(id));

        return () => {};
    }, [dispatch, id]);

    return (
        <section className={styles.results}>
            {result ? (
                <>
                    <div className={styles.resultsContainer}>
                        <div className={styles.textContainer}>
                            <h2 className={styles.heading}>Результаты теста</h2>
                            <h3 className={styles.subHeading}>{result.current_skill_test.skill}</h3>
                            <p className={styles.text}>{`Тест пройден на ${result.best_skill_result.level}%`}</p>
                            <span className={styles.subtext}>Для подтверждения навыка пройди тест на 90% и более процентов</span>
                            <div className={styles.answers}>
                                <p>
                                    Всего вопросов: <span>{result.current_skill_test.count_questions}</span>
                                </p>
                                <p>
                                    Верных ответов: <span>{result.current_skill_test.correct_answers}</span>
                                </p>
                            </div>
                            <div className={styles.btnContainer}>
                                {result.current_skill_test.percentage_correct < 90 ? (
                                    <Link to={'https://practicum.yandex.ru/'}>
                                        <CustomButton text={btnText} buttonVariant="outlined" disabled={false} />
                                    </Link>
                                ) : (
                                    <Link to={'/'}>
                                        <CustomButton text="Перейти ко всем навыкам" buttonVariant="outlined" disabled={false} />
                                    </Link>
                                )}

                                {result.current_skill_test.percentage_correct < 100 ? (
                                    <Link to={`/tests/${result.current_skill_test.level_test}`} state={{ id: result.current_skill_test.level_test }}>
                                        <CustomButton text="Пройти тест ещё раз" buttonVariant="outlined" disabled={false} />
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                        <RoundProgressbar label="Навыки подтверждены" value={result.best_skill_result.level} />
                    </div>
                    <div className={styles.recomendations}>
                        <h3 className={styles.recomendationHeading}>Рекомендации для развития навыка</h3>
                        <div className={styles.recomendationContainer}>
                            <div>
                                <h4 className={styles.linksHeading}>Курсы</h4>
                                <ul className={styles.recomendationList}>
                                    {result.recommendations.courses.map((item) => (
                                        <li key={item.name}>
                                            <a className={styles.recomendationItem} href={item.url} target="_blank" rel="noopener noreferrer" >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className={styles.linksHeading}>Статьи</h4>
                                <ul className={styles.recomendationList}>
                                    {result.recommendations.articles.map((item) => (
                                        <li key={item.name}>
                                            <a className={styles.recomendationItem} href={item.url} target="_blank" rel="noopener noreferrer" >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </section>
    );
};
export default TestResult;

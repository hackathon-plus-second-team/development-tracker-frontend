import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Test.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getTest, selectQuestions, TQuestion, sendAnswers } from '../../store/testsSlice';
import TestQuestion from '../../Components/TestQuestion/TestQuestion';

const Test = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state;
    const { id } = state;
    const dispatch = useAppDispatch();
    const test = useAppSelector(selectQuestions);
    const answers = useAppSelector((state) => state.tests.user_answers);
    const [value, setValue] = useState(0);
    const [buttonText, setButtonText] = useState('Cледующий вопрос');

    function onClick() {
        setValue(value + 1);
        if (test) {
            if (value + 1 === test?.questions?.length - 1) {
                setButtonText('Завершить тест');
            }
        }
    }

    useEffect(() => {
        id ? dispatch(getTest(id)) : dispatch(getTest('1'));

        return () => {};
    }, [dispatch, id]);

    useEffect(() => {
        if (answers.length === test?.questions?.length) {
            const testResult = { testId: test.id, user_answers: answers };
            dispatch(sendAnswers(testResult));

            setValue(0);
            setButtonText('Завершить тест');

            return navigate('/test/result', { state: { id: test.id } });
        }

        return () => {};
    }, [answers]);

    return (
        <section className={styles.test}>
            <Link to="/" className={styles.buttonBack}></Link>
            <h2 className={styles.heading}>Тест {test?.name}</h2>

            {test?.questions?.map((el: TQuestion, index: number) => {
                return value === index ? <TestQuestion data={el} key={el.number} buttonText={buttonText} onClick={onClick} questionIndex={el.number} /> : null;
            })}
        </section>
    );
};
export default Test;

import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Test.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getTest, selectQuestions, selectResult, TQuestion, sendAnswers } from '../../store/testsSlice';
import TestQuestion from '../../Components/TestQuestion/TestQuestion';

const Test = () => {
    const location = useLocation();
    let navigate = useNavigate();
    const state = location.state;
    const { id } = state;
    const dispatch = useAppDispatch();
    const test = useAppSelector(selectQuestions);
    const result = useAppSelector(selectResult);
    const answers = useAppSelector((state) => state.tests.user_answers);

    useEffect(() => {
        id ? dispatch(getTest(id)) : dispatch(getTest(1));

        return () => {};
    }, [dispatch]);

    const [value, setValue] = useState(0);
    const [buttonText, setButtonText] = useState('Cледующий вопрос');

    function onClick() {
        setValue(value + 1);

        if (value + 1 === test?.questions?.length - 1) {
            setButtonText('Завершить тест');
        }
        // if (value + 1 === test?.questions?.length) {
        //     setValue(0);
        //     setButtonText('Завершить тест');
        // }
    }

    useEffect(() => {
        if (answers.length === test?.questions?.length) {
            const testResult = { testId: test.id, user_answers: answers };
            dispatch(sendAnswers(testResult));

            return navigate('/test/result');
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

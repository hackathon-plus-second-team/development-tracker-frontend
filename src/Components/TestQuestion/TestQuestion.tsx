import styles from './TestQuestion.module.scss';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { TQuestion, Answer } from '../../store/testsSlice';
import CustomButton from '../../ui-kit/Button/CustomButton';
import { answerAdded } from '../../store/testsSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { useState } from 'react';

const TestQuestion = ({ data, buttonText, onClick, questionIndex }) => {
    const dispatch = useAppDispatch();

    const [value, setValue] = useState({});

    function choseAnswer(e) {
        const answer = {
            question: questionIndex,
            // user_answer: Number(e.target.value),
            user_answer: e.target.value,
        };

        setValue(answer);
    }

    function sendAnswer() {
        dispatch(answerAdded(value));
        onClick();
    }

    return (
        <>
            <h2 className={styles.title}>{data.name}</h2>

            <FormControl>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                    {data.answers.map((el: Answer) => {
                        return <FormControlLabel key={el.number} value={el.number} control={<Radio />} label={el.name} onChange={choseAnswer} />;
                    })}
                </RadioGroup>

                <CustomButton text={buttonText} buttonVariant="contained" onClick={sendAnswer} />
            </FormControl>
        </>
    );
};
export default TestQuestion;

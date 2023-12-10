import styles from './TestQuestion.module.scss';
import { testStyle, radioStyle, radioLabelStyle } from './TestQuestionStyle';
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
    const [buttonDisable, setButtonDisable] = useState(true);

    function chooseAnswer(e) {
        console.log(value);

        const answer = {
            question: questionIndex,
            user_answer: Number(e.target.value),
        };

        setValue(answer);
        setButtonDisable(false);
    }

    function sendAnswer() {
        dispatch(answerAdded(value));
        onClick();
    }

    return (
        <>
            <h2 className={styles.title}>{data.name}</h2>

            <FormControl sx={{ gap: '40px' }}>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" sx={testStyle}>
                    {data.answers.map((el: Answer) => {
                        return <FormControlLabel sx={radioLabelStyle} key={el.number} value={el.number} control={<Radio sx={radioStyle} />} label={el.name} onChange={chooseAnswer} />;
                    })}
                </RadioGroup>

                <div>
                    <CustomButton text={buttonText} buttonVariant="contained" disabled={buttonDisable} onClick={sendAnswer} />
                </div>
            </FormControl>
        </>
    );
};
export default TestQuestion;

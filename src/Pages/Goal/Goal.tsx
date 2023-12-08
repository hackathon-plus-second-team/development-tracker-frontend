import ArrowIcon from '../../assets/img/back.svg?react';
import { TextField, SelectChangeEvent } from '@mui/material';
import Calendar from '../../ui-kit/Calendar/Calendar';
import Dropdown from '../../ui-kit/Dropdown/Dropdown';
import { useAppSelector } from '../../hooks/hooks';
import { getAllCourses } from '../../store/coursesSlice';
import { useState, useEffect } from 'react';
import ProgressbarList, { TSkill } from '../../Components/ProgressbarList/ProgressbarList';
import { useForm, SubmitHandler } from 'react-hook-form';

const Goal = () => {
    const courses = useAppSelector(getAllCourses);
    const [selectedCourse, setSelectedCourse] = useState<string[]>([]);
    const [skillList, setSkillList] = useState<TSkill[]>([]);
    const handleCourseChange = (evt: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = evt;

        setSelectedCourse(typeof value === 'string' ? value.split(',') : value);
    };

    useEffect(() => {
        if (courses?.length) {
            // @ts-expect-error coures.id число
            const match = courses.map((course) => (selectedCourse.includes(course.id) ? course.skills : []));
            const skillList = match.flatMap((val) => val);
            setSkillList(() => skillList);
        }
    }, [selectedCourse, courses]);

    type Inputs = {
        name: string;
        calendar: string
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <ArrowIcon />
                    <h2>Установи цель развития</h2>
                </div>
                <div>
                    <div>
                        <span>Название цели</span>
                        <TextField {...register('name',{required:true})}/>
                    </div>
                    <div>
                        <span>Дедлайн</span>
                        <Calendar register={register}/>
                    </div>
                </div>
                <div>
                    <span>Какие навыки тебе надо прокачать</span>
                    <Dropdown options={courses} selectedValues={selectedCourse} onChange={handleCourseChange} placeholder="fdfg" />

                    <ProgressbarList skills={skillList} isCheckbox={true} register={register} />
                    <button>ddd</button>
                </div>
            </form>
        </section>
    );
};
export default Goal;

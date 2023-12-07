import { useEffect } from 'react';
import BasicTabs from '../ui-kit/Tab/Tab';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getCourses } from '../store/coursesSlice';
import {getAllCourses} from '../store/coursesSlice'

const Skills = () => {
    const dispatch = useAppDispatch();
    const courses = useAppSelector(getAllCourses)

    useEffect(() => {
        dispatch(getCourses());
        return () => {};
    }, [dispatch]);

    return (
        <section>
            <BasicTabs courseData={courses}></BasicTabs>
        </section>
    );
};
export default Skills;

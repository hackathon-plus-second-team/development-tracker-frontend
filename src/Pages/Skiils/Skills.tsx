import { useEffect } from 'react';
import BasicTabs from '../../ui-kit/Tab/Tab';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getCourses } from '../../store/coursesSlice';
import {getAllCourses} from '../../store/coursesSlice'
import styles from "./Skills.module.scss"
const Skills = () => {
    const dispatch = useAppDispatch();
    const courses = useAppSelector(getAllCourses)

    useEffect(() => {
        dispatch(getCourses());
        return () => {};
    }, [dispatch]);

    return (
        <section className={styles.skills}>
            <h2 className={styles.heading}>Развите навыков</h2>
            <BasicTabs courseData={courses}></BasicTabs>
        </section>
    );
};
export default Skills;

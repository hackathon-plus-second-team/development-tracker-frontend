import { Link } from 'react-router-dom';
import styles from './Test.module.scss';
import { useLocation} from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import { getCourses } from '../../store/coursesSlice';
// import {getAllCourses} from '../../store/coursesSlice'

const Test = (props) => {
    const location = useLocation();
    const state = location.state;

    debugger;

    const dispatch = useAppDispatch();
    const courses = useAppSelector(getAllCourses);

    useEffect(() => {
        // запрос на инфу про тест
        return () => {};
    }, [dispatch]);

    return (
        <section className={styles.test}>
            <Link to="/" className={styles.buttonBack}></Link>
            <h2 className={styles.heading}> {state.skillName}</h2>
        </section>
    );
};
export default Test;

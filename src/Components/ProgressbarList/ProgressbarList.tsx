import { Link } from 'react-router-dom';
import ProgressBar from '../../ui-kit/ProgressBar/ProgressBar';
import styles from './Progressbar.module.scss';
type TSkill = {
    id: number;
    name: string;
    level: number;
};
type ProgressbarListProps = {
    skills: TSkill[];
    label: string;
};

const ProgressbarList = ({ skills, label }: ProgressbarListProps) => {
    return (
        <div>
            <h2 className={styles.label}>{label}</h2>
            {skills.map((skill) => (
                <Link to={`skills/${skill.id}`} key={skill.id} className={styles.link}>
                    <ProgressBar value={skill.level} skillName={skill.name} isBig={true} isCheckbox={false} />
                </Link>
            ))}
        </div>
    );
};
export default ProgressbarList;

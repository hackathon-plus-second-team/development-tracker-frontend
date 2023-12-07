import ProgressBar from '../../ui-kit/ProgressBar/ProgressBar';
import styles from "./Progressbar.module.scss"
type TSkill = {
    id: number;
    name: string;
    level: number;
};
type ProgressbarListProps = {
    skills: TSkill[];
    label: string
};

const ProgressbarList = ({ skills, label }: ProgressbarListProps) => {
    return (
        <div>
            <h2 className={styles.label}>{label}</h2>
            {skills.map((skill) => (
                <ProgressBar value={skill.level} skillName={skill.name} isBig={true} isCheckbox={false}  key={skill.id}/>
            ))}
        </div>
    );
};
export default ProgressbarList;

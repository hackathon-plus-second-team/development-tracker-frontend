
import ProgressBar from '../../ui-kit/ProgressBar/ProgressBar';
import styles from './Progressbar.module.scss';
export type TSkill = {
    id: number;
    name: string;
    level: number;
};
type ProgressbarListProps = {
    skills: TSkill[];
    label?: string;
    isCheckbox: boolean;
    // Не понятно как сделать нужный тип
    // eslint-disable-next-line
    register?: any;

};

const ProgressbarList = ({ skills, label, isCheckbox, register }: ProgressbarListProps) => {
    return (
        <div>
            {label ? <h2 className={styles.label}>{label}</h2> : null}
            {skills.map((skill) => (
                <ProgressBar value={skill.level} skillName={skill.name} skillId={skill.id} isBig={true} isCheckbox={isCheckbox} key={skill.id}  register={register}/>
            ))}
        </div>
    );
};
export default ProgressbarList;

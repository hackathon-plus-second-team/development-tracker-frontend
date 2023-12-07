import ProgressBar from '../../ui-kit/ProgressBar/ProgressBar';

type TSkill = {
    id: number;
    name: string;
    level: number;
};
type ProgressbarListProps = {
    skills: TSkill[];
};

const ProgressbarList = ({ skills }: ProgressbarListProps) => {
    return (
        <div>
            {skills.map((skill) => (
                <ProgressBar value={skill.level} skillName={skill.name} isBig={true} isCheckbox={false} />
            ))}
        </div>
    );
};
export default ProgressbarList;

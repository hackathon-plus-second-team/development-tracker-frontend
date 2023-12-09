import BasicTabs from './ui-kit/Tab/Tab';
import ProgressBar from './ui-kit/ProgressBar/ProgressBar';
import Calendar from "./ui-kit/Calendar/Calendar";

function App() {
    return (
        <>
            <BasicTabs></BasicTabs>

            <ProgressBar skillName="html" value={0} isCheckbox={false} isBig={true}></ProgressBar>
            <ProgressBar skillName="html" value={50} isCheckbox={false} isBig={true}></ProgressBar>
            <ProgressBar skillName="html" value={100} isCheckbox={false} isBig={true}></ProgressBar>
            <ProgressBar skillName="html" value={0} isCheckbox={false} isBig={false}></ProgressBar>
            <ProgressBar skillName="html" value={50} isCheckbox={false} isBig={false}></ProgressBar>
            <ProgressBar skillName="html" value={100} isCheckbox={false} isBig={false}></ProgressBar>
        </>
    );
}

export default App;

import BasicTabs from './ui-kit/Tab/Tab';
import ProgressBar from './ui-kit/ProgressBar/ProgressBar';

function App() {
    return (
        <>
            <BasicTabs></BasicTabs>

            <ProgressBar skillName="html" value={0} isCheckbox={false}></ProgressBar>
            <ProgressBar skillName="html" value={50} isCheckbox={false}></ProgressBar>
            <ProgressBar skillName="html" value={100} isCheckbox={false}></ProgressBar>
        </>
    );
}

export default App;

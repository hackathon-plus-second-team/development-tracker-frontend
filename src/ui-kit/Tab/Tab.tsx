import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProgressbarList from '../../Components/ProgressbarList/ProgressbarList';
import RoundProgressbar from '../RoundProgressbar/RoundProgressbar';
import Card from '../Card/Card';

// интерфейс получаемых от бэка данных
type TSkill = {
    id: number;
    name: string;
    level: number;
};

type TCourse = {
    id: number;
    name: string;
    description: string;
    skills: TSkill[];
};

type TBasicTabsProps = {
    courseData: TCourse[] | null;
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ courseData }: TBasicTabsProps) {
    const [value, setValue] = React.useState(0);
    // @ts-expect-error исправить
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs
                sx={{
                    minHeight: 'fit-content',
                    marginBottom: '24px',
                    '.MuiTabs-flexContainer': { gap: '32px' },
                }}
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="scrollable"
                scrollButtons={false}
                allowScrollButtonsMobile
                TabIndicatorProps={{
                    sx: {
                        backgroundColor: '#1D6BF3',
                    },
                }}
            >
                {courseData &&
                    courseData.map((el, index) => {
                        return (
                            <Tab
                                label={el.name}
                                key={index}
                                {...a11yProps(index)}
                                sx={{
                                    color: '#1A1B22',
                                    textAlign: 'center',
                                    fontFamily: 'Text-Regular, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                    padding: 0,
                                    marginBottom: '8px',
                                    minHeight: 'fit-content',
                                    '&:hover': {
                                        color: '#1D6BF3',
                                    },
                                    '&.Mui-selected': {
                                        color: '#1D6BF3',
                                    },
                                }}
                            />
                        );
                    })}
            </Tabs>

            {courseData &&
                courseData.map((el: TCourse, index) => {
                    return (
                        /* вставить данные в компонент страницы, привязать к ней индекс и передать ее */
                        <CustomTabPanel value={value} index={index} key={index}>
                            <ProgressbarList skills={el.skills} label="Junior" />
                            <RoundProgressbar label="Навыки подтверждены на" value={20} />
                            <Card deadline={'11.11.11'} goal={false} label="Стать мидлои" progressValue={22} />
                        </CustomTabPanel>
                    );
                })}
        </Box>
    );
}

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// interface courseDataInterface {
// интерфейс получаемых от бэка данных
// }

// импровизированная заглушка:

const courseData = [
    {
        name: 'Фронтенд-разработчик',
        label: 'frontend',
        index: 1,
        skills: [
            { name: 'HTML', index: 1 },
            { name: 'JavaScript', index: 2 },
        ],
    },
    {
        name: 'Python-разработчик',
        label: 'python',
        index: 2,
        skills: [
            { name: 'python', index: 1 },
            { name: 'database', index: 2 },
        ],
    },
    {
        name: 'Python-разработчик',
        label: 'python',
        index: 2,
        skills: [
            { name: 'python', index: 1 },
            { name: 'database', index: 2 },
        ],
    },
];

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
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
                {courseData.map((el, index) => {
                    return (
                        <Tab
                            label={el.label}
                            key={index}
                            {...a11yProps(index)}
                            sx={{
                                color: '#1A1B22',
                                textAlign: 'center',
                                fontFamily: 'Display-Regular',
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

            {
                // @ts-expect-error исправить
                courseData.map((el, index) => {
                    return (
                        /* вставить данные в компонент страницы, привязать к ней индекс и передать ее */
                        <CustomTabPanel value={value} index={index} key={index}></CustomTabPanel>
                    );
                })
            }
        </Box>
    );
}

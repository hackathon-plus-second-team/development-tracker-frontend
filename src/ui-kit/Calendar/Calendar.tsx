import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { ruRU } from '@mui/x-date-pickers/locales/';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import CalendarIcon from '../../assets/icons/calendar.svg?react';
const calendarHeaderPropsStyles = {
    sx: {
        '.MuiPickersCalendarHeader-root': {
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
        },
        '.MuiPickersArrowSwitcher-root': {
            display: 'inline-flex',
        },
        '.MuiPickersCalendarHeader-label': {
            textAlign: 'center',
        },
        '.MuiPickersArrowSwitcher-spacer': {
            width: '220px',
        },
        '.MuiPickersFadeTransitionGroup-root': {
            display: 'flex',
            position: 'absolute',
            paddingLeft: '90px',
        },
        '& .MuiPickersCalendarHeader-switchViewButton': {
            display: 'none',
        },
        '.MuiIconButton-edgeStart': {
            marginRight: '20px',
        },
    },
};

function Calendar() {
    const [open, setOpen] = useState(false);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru" localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
            <DatePicker
                open={open}
                onClose={() => setOpen(false)}
                closeOnSelect={false}
                slots={{ openPickerButton: () => null }}
                slotProps={{
                    calendarHeader: calendarHeaderPropsStyles,
                    actionBar: { actions: ['cancel', 'accept'] },
                    textField: {
                        placeholder: 'Выберите дату',
                        InputProps: {
                            startAdornment: <CalendarIcon />,
                        },
                        onClick: () => setOpen(true),
                    },
                }}
            />
        </LocalizationProvider>
    );
}

export default Calendar;

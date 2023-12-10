export const buttonStyle = {
    contained: {
        padding: '10px 20px',
        borderRadius: '6px',
        backgroundColor: '#5a9bff',
        textAlign: 'center',
        fontFamily: 'Display-Medium, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        boxShadow: 'none',

        '&:hover': {
            backgroundColor: '#1d6bf3',
        },
        '&:disabled': {
            backgroundColor: '#b5b5b7',
            color: '#ffffff',
        },
    },
    outlined: {
        padding: '10px 20px',
        borderRadius: '6px',
        backgroundColor: '#ffffff',
        color: '#1d6bf3',
        textAlign: 'center',
        fontFamily: 'Display-Medium, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        border: '1px solid #1d6bf3',
        boxShadow: 'none',

        '&:hover': {
            backgroundColor: '#1d6bf3',
            color: '#ffffff',
            boxShadow: 'none',
        },
        '&:disabled': {
            backgroundColor: '#ffffff',
            color: '#b5b5b7',
            border: '1px solid #b5b5b7',
        },
    },
    text: {
        fontFamily: 'Display-Medium, sans-serif',
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: '16px',
        color: '#5a9bff',
        textTransform: 'lowercase',
        padding: '0',

        '&:hover': {
            color: '#1d6bf3',
            backgroundColor: 'transparent',
        },
        '&:disabled': {
            color: '#b5b5b7',
        },
    },
};

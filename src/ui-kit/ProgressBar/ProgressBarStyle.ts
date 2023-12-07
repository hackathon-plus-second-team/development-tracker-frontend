export const barStyles = {
    big: {
        progress: {
            width: '200px',
            backgroundColor: 'white',
            border: '1px solid #DDE0E4',
            borderRadius: '1px',

            '.MuiLinearProgress-bar': {
                backgroundColor: '#DDE0E4',
            },

            '&:hover': {
                border: '1px solid #B5B5B7',
            },

            '&:hover .MuiLinearProgress-bar ': {
                backgroundColor: '#B5B5B7',
            },
        },
        full: {
            width: '200px',
            backgroundColor: 'white',
            border: '1px solid #87CC9E',
            borderRadius: '1px',

            '.MuiLinearProgress-bar': {
                backgroundColor: '#87CC9E',
            },

            '&:hover .MuiLinearProgress-bar ': {
                border: '1px solid #B5B5B7',
            },
        },
    },
    small: {
        progress: {
            width: '82px',
            backgroundColor: 'white',
            border: '1px solid #DDE0E4',
            borderRadius: '1px',

            '.MuiLinearProgress-bar': {
                backgroundColor: '#DDE0E4',
            },
        },
        full: {
            width: '82px',
            backgroundColor: 'white',
            border: '1px solid #87CC9E',
            borderRadius: '1px',

            '.MuiLinearProgress-bar': {
                backgroundColor: '#87CC9E',
            },
        },
    },
};

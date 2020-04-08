import {makeStyles} from "@material-ui/core/styles";

const useStylesIcons = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: "1rem",
            padding: ".5rem",
            border: '2px solid grey',
            borderRadius: "5px",
            borderStyle: "ridge",
            flexGrow: 1,
        },
        flexGrow: 1,
    },

    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));

export default useStylesIcons
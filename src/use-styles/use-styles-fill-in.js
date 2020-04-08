import {makeStyles} from "@material-ui/core/styles";

const useStylesFillIn = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        flexGrow: 1,
    },

    categories: {
        width: 500,
    },

    categoryRoot: {
        margin: "1rem",
        padding: ".5rem",
        border: '2px solid grey',
        borderRadius: "5px",
        borderStyle: "ridge",
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

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 380,
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));

export default useStylesFillIn
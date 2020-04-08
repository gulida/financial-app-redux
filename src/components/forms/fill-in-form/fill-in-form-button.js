import React from "react";
import {Button} from "@material-ui/core";
import { useStylesFillIn as useStyles } from "../../../use-styles";

const FillInButton = () => {

    const classes = useStyles()
    
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
        >
            Submit
        </Button>
    )
}

export default FillInButton
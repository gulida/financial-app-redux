import React from "react";
import {Button} from "@material-ui/core";
import { useStylesFillIn as useStyles } from "../../../use-styles";

const FillInButton = ({ onAddedToList }) => {

    const classes = useStyles()
    
    return (
        <Button
            type="submit"
            onClick={onAddedToList}
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
import React from "react";
import {Grid, InputAdornment, TextField} from "@material-ui/core";
import DialpadRoundedIcon from "@material-ui/icons/DialpadRounded";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { useStylesFillIn as useStyles } from "../../../use-styles";


const FillInFormGrid = ({
                            date,
                            amount,
                            comment,
                            category,
                            handleCommentChange,
                            handleDateChange,
                            handleAmountChange,
                            handleCategoryChange, }) => {

    const classes = useStyles()

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="input-with-icon-textfield"
                    type="number"
                    fullWidth
                    className={classes.textField}
                    value={amount}
                    onChange={handleAmountChange}
                    label="Enter Amount"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <DialpadRoundedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="standard-select-currency"
                    label="Category"
                    fullWidth
                    className={classes.textField}
                    value={category}
                    onChange={handleCategoryChange}
                    helperText="Please select your category"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="standard-textarea"
                    label="Comment"
                    fullWidth
                    className={classes.textField}
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Comment"
                    multiline
                />
            </Grid>
        </Grid>
    )
}

export default FillInFormGrid
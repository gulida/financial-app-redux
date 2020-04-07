import 'date-fns';
import React, {useState} from 'react';
import {
            Grid,
            MenuItem,
            TextField,
            InputAdornment,
            BottomNavigationAction,
            BottomNavigation
        }from '@material-ui/core';
import DialpadRoundedIcon from "@material-ui/icons/DialpadRounded";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { useStylesFillIn as useStyles } from "../../../use-styles";
import './fill-in-form.css'


const FillInForm = ({
                        date,
                        amount,
                        comment,
                        category,
                        handleCommentChange,
                        handleDateChange,
                        handleAmountChange,
                        handleCategoryChange,
                        categoryIcon,
                        categoryValue,
                        categoryLabel,

                        categories}) => {

    const classes = useStyles();

    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container
              spacing={1}
              justify="center"
              alignItems="center"
        >
            <Grid item xs={2} sm={3} />
            <Grid item xs={8} sm={6}>
                <form style={{ alignItems: "center" }} className={classes.root} noValidate autoComplete="off">
                    <div className="amount">
                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            type="number"
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
                    </div>
                    <div className="date">
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
                    </div>
                    <div className="category">
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Category"
                            value={category}
                            onChange={handleCategoryChange}
                            helperText="Please select your currency"
                        >
                            {
                                categories.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </div>
                    <div className="comment">
                        <TextField
                            id="standard-textarea"
                            label="Comment"
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Comment"
                            multiline
                        />
                    </div>
                </form>
                <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                    <BottomNavigationAction label="Recents" value="recents" icon={"icon"} />
                    <BottomNavigationAction label="Recents" value="recents" icon={"icon"} />
                    <BottomNavigationAction label="Recents" value="recents" icon={"icon"} />
                    <BottomNavigationAction label="Recents" value="recents" icon={"icon"} />
                </BottomNavigation>
                <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                    <BottomNavigationAction label="Recents" value="recents" icon={"icon"} />
                    <BottomNavigationAction label="Recents" value="recents" icon={"icon"} />
                    <BottomNavigationAction label="Recents" value="recents" icon={"icon"} />
                </BottomNavigation>
                <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                    <BottomNavigationAction label="Recents" value="recents" icon={"icon"} />
                    <BottomNavigationAction label="Recents" value="recents" icon={"icon"} />
                </BottomNavigation>
            </Grid>
            <Grid item xs={2} sm={3} />
        </Grid>

    )
}

export default  FillInForm
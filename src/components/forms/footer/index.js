
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import './footer.css'
import {Link} from "react-router-dom";



const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            className="footer"
        >
            <Link style={{ textDecoration: "none" }} to={"/new-spending"}>
                <BottomNavigationAction showLabel style={{marginRight: 50, }} label="Spending" icon={<IndeterminateCheckBoxOutlinedIcon/>} />
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/new-income"}>
                <BottomNavigationAction showLabel style={{marginLeft: 50, }}  label="Income" icon={<AddBoxOutlinedIcon />} />
            </Link>
        </BottomNavigation>
    );
}

export default Footer
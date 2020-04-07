import React from "react";
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import HomeIcon from '@material-ui/icons/Home';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SchoolIcon from '@material-ui/icons/School';
import WifiIcon from '@material-ui/icons/Wifi';
import WorkIcon from '@material-ui/icons/Work';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CakeIcon from '@material-ui/icons/Cake';
import CallEndOutlinedIcon from '@material-ui/icons/CallEndOutlined';

    const transportIcon = <DirectionsBusIcon />
    const houseIcon = <HomeIcon/>
    const foodIcon = <RestaurantIcon/>
    const educationIcon = <SchoolIcon/>
    const internetIcon = <WifiIcon/>
    const salaryIcon = <WorkIcon />
    const balanceIcon = <MonetizationOnIcon/>
    const bonusIcon = <MailOutlineIcon/>
    const giftIcon = <CardGiftcardIcon/>
    const birthDayIcon = <CakeIcon/>
    const phoneIcon = <CallEndOutlinedIcon />

    const spendingIconsArr = [
                                foodIcon,
                                houseIcon,
                                transportIcon,
                                internetIcon,
                                educationIcon,
                                giftIcon,
                                birthDayIcon,
                                phoneIcon
                            ];

    const incomeIconsArr = [
                                salaryIcon,
                                bonusIcon,
                                birthDayIcon,
                                giftIcon
                            ]

export {
        balanceIcon,
        spendingIconsArr,
        incomeIconsArr
}


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
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

    const transportIcon = <DirectionsBusIcon style={{color: "darkorange"}} />
    const houseIcon = <HomeIcon style={{ color: "darkolivegreen"}}/>
    const foodIcon = <RestaurantIcon style={{ color: "lightsalmon"}}/>
    const educationIcon = <SchoolIcon style={{ color: "mediumorchid"}}/>
    const internetIcon = <WifiIcon style={{ color: "green"}}/>
    const salaryIcon = <WorkIcon style={{ color: "aqua" }} />
    const balanceIcon = <MonetizationOnIcon style={{ color: "aquamarine"}}/>
    const bonusIcon = <MailOutlineIcon style={{ color: "brown"}}/>
    const giftIcon = <CardGiftcardIcon style={{ color: "chartreuse"}}/>
    const birthDayIcon = <CakeIcon style={{ color: "lightgreen"}}/>
    const phoneIcon = <CallEndOutlinedIcon style={{ color: "lightpink"}} />
    const addIcon = <AddCircleOutlineIcon style={{ color: "dodgerblue" }} />

    const spendingIconsArr = [
                                foodIcon,
                                houseIcon,
                                transportIcon,
                                internetIcon,
                                educationIcon,
                                giftIcon,
                                birthDayIcon,
                                phoneIcon,
                                addIcon
                            ];
    const spendingIconColors = [
        "lightsalmon", "darkolivegreen", "darkorange",
        "green", "mediumorchid", "chartreuse", "lightgreen", "lightpink", "dodgerblue"
    ]

    const incomeIconsArr = [
                                salaryIcon,
                                bonusIcon,
                                birthDayIcon,
                                giftIcon,
                                addIcon
                            ]
const incomeIconColors = [
    "aqua", "brown", "lightgreen", "chartreuse", "dodgerblue"
]

export {
        balanceIcon,
        spendingIconsArr,
        incomeIconsArr,
        spendingIconColors,
        incomeIconColors

}


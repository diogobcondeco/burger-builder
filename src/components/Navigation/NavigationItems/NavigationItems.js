import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="burger-builder/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="burger-builder/orders">Orders</NavigationItem>
        <NavigationItem link="burger-builder/Auth">Authenticate</NavigationItem>
    </ul>
);

export default navigationItems;
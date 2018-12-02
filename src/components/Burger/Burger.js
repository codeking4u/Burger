import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';
const burger = (props) =>{
    return(<div className={classes.Burger}>
        <BurgerIngredients type="top-burger"/>
        <BurgerIngredients type="below-burger"/>
    </div>);
}
export default burger ;
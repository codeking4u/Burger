import React from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BurgerIngredients from '../../components/Burger/BurgerIngredients/BurgerIngredients';

const burgersetup=(props)=>{
    return(
        <Auxi>
            <Burger />
        </Auxi>
    );
}

export default burgersetup;
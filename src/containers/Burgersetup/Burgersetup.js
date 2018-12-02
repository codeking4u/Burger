import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerIngredients from '../../components/Burger/BurgerIngredients/BurgerIngredients';

const burgersetup=(props)=>{
    return(
        <Aux>
            <Burger />
            <BurgerIngredients />
        </Aux>
    );
}

export default burgersetup;
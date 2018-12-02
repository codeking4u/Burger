import React, { Component } from 'react';
import PropTypes from 'prop-types';
class BurgerIngredients extends Component{
    render(){
        let ingredient = null;
        switch(this.props.type){
            case 'top-burger':
                ingredient = <div></div>;
                break;
            default:
                ingredient = <div>zsd</div>;
                break;
        }
        return ingredient;
    }
}

BurgerIngredients.propTypes={
    type: PropTypes.string.isRequired
}
export default BurgerIngredients;
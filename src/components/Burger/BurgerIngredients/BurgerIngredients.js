import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredients.css';
class BurgerIngredients extends Component{
    render(){
        let ingredient = null;
        switch(this.props.type){
            case 'top-burger':
                ingredient = <div className={classes.BreadTop}></div>;
                break;
            case 'below-burger':
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case 'meet':
                ingredient = <div></div>;
                break;
            case 'bacon':
                ingredient = <div></div>;
                break;
            case 'salat':
                ingredient = <div></div>;
                break;
            case 'seed1':
                ingredient = <div></div>;
                break;
            case 'seed2':
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
import React from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' click={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' click={props.purchaseContinued}>PROCEED</Button>
        </Aux>
    );
};

export default orderSummary;
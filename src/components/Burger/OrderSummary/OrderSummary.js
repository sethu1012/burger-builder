import React, { Component } from 'react';
import Aux from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] WilUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
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
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' click={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType='Success' click={this.props.purchaseContinued}>PROCEED</Button>
            </Aux>
        );
    }
}

export default OrderSummary;
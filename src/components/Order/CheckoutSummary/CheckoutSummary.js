import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Good Taste</h1>
            <div style={{ width: '100%', height: '250px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                click={props.onCheckoutCancelled}>CANCEL</Button>
            <Button
                btnType="Success"
                click={props.onCheckoutContinued}>CONTINUE</Button>
        </div>
    );
};

export default checkoutSummary;
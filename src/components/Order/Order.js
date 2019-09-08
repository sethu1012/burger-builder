import React from 'react';

import classes from './Order.css';

const order = (props) => {

    const { price } = props.item;
    const ingredients = [];
    for (let ingredient in props.item.ingredients) {
        ingredients.push({
            name: ingredient,
            amount: props.item.ingredients[ingredient]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 10px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(price).toFixed(2)}</strong></p>
        </div>
    );
}

export default order;
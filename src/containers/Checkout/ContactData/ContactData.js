import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.css';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Sethuraman',
                address: {
                    street: 'Test',
                    zip: '600061',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/');
            }).catch(error =>
                this.setState({ loading: false })
            );

    };

    render() {
        let form = (
            <form>
                <Input inputtype="input" className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <Input inputtype="input" className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <Input inputtype="input" className={classes.Input} type="text" name="street" placeholder="Your Street" />
                <Input inputtype="input" className={classes.Input} type="text" name="postal" placeholder="Your Postal" />
                <Button
                    btnType="Success"
                    click={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Details</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
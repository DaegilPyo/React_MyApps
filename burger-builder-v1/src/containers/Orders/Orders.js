import React, { Component } from "react";
import Order from "../../components/Order/Order/Order";
import axios from '../../axios-order';
import withErroHandler from '../../hoc/WithErroHandler/WithErroHandler';
class Orders extends Component {
    state = {
        orders: [],
        loading: true,
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({ ...response.data[key], id: key });
                }
                this.setState({ loading: false, orders: fetchedOrders });
            }).catch(err => {
                console.log(err);
                this.setState({ loading: false });
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price} />))}
            </div>
        );
    }
}

export default withErroHandler(Orders, axios);
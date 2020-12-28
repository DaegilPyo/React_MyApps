import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey} ><span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]}</li>
    });
    return (
        <Aux>
            <h3>
                Your Order
            </h3>
            <p> A delicious burget with the following ingredients : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Would like you continue to check out ?  </p>

        </Aux>
    );
}

export default orderSummary;

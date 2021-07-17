import React from 'react';
import CartItemsService from '../../actions/cartItems';

const PizzaItems = (props) => {
    const pizzaItems = props.location.data;
    const createCartItem = (cartItem) => {
        CartItemsService.createCartItem(cartItem)
            .then((res) => {
                alert("Food Item has been addedd to the cart");
            })
    }
    return (
        pizzaItems.map((data) => (
            <div className="container mt-5">
                <div className="row">
                    <header>
                        <h5>{data.name}</h5>
                    </header>
                    <main>
                        <p>Price: {data.price}</p>
                        <p>Description: {data.description}</p>
                        <img src={data.image} alt={data.name} align="right" />
                    </main>
                    <footer>
                        <button type="button" onClick={() => createCartItem(data)}>Order Now</button>
                    </footer>
                    <hr></hr>
                </div>
            </div>
        ))
    )

}

export default PizzaItems;
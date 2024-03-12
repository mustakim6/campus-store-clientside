import { useEffect, useState } from "react";
import Card from "./Card";

const Cart = () => {

    const [addCart, setaddCart] = useState([])

    useEffect(() => {
        fetch('Cart.json')
            .then(res => res.json())
            .then(data => setaddCart(data))
    }, [])

    return (
        <div className="text-center my-6">
            <h2 className="text-2xl font-bold p-3">Add to Cart List : {addCart.length} </h2>

            <div className="grid grid-cols-3 gap-4">
                {
                    addCart.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>

        </div>
    );
};

export default Cart;
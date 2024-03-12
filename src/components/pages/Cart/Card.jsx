
const Card = ({card}) => {

    const {productName,details,price} =card
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>{details}</p>
                    
                    <div className="  card-actions ">
                    <p className=" mr-24 text-xl font-bold">price: {`${price}$`}</p>
                        <button className="btn btn-warning">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
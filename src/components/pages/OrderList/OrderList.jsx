import { useEffect } from "react";
import { useState } from "react";
import TableRow from "./TableRow";

const OrderList = () => {
    const [orderList, setOrderlist] = useState([]);

    useEffect(() => {

        fetch("Orderlist.json")
            .then(res => res.json())
            .then(data => setOrderlist(data))


    }, [])

    return (
        <div >
            <h2 className="text-center text-xl font-bold">Ordered List : {orderList.length} </h2>


            <div className="overflow-x-auto m-8 bg-indigo-200">
                <table className="table">
                    {/* head */}
                    <thead className="text-2xl  text-cyan-800">
                        <tr>
                            <th>
                                
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th> Details</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl">
                        {/* row 1 */}
                        {
                            orderList.map(order => <TableRow
                                key={order.key}
                                order={order}
                            ></TableRow>)
                        }

                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default OrderList;



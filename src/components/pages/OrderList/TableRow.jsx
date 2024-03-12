
const TableRow = ({order}) => {

        const {category, name, image} = order ;

    return (
        <>
           <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox bg-violet-400" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                   
                                </div>
                            </td>
                            <td>
                                {name}
                                
                                
                            </td>
                            <td>{category}</td>
                            <th>
                                <button className="btn btn-ghost  text-xl">details</button>
                            </th>
                        </tr>
        </>
    );
};

export default TableRow;
import React from 'react';
import { Link } from 'react-router-dom';


const AllToyRow = ({ allToy,index }) => {
    // console.log(allToy)
    const { _id, name, price, quantity, seller_name, category} = allToy

    return (
        <tr>
            <th>{index}</th>
            <td className='text-lg text-indigo-900'>{seller_name}</td>
            <td className='text-lg text-green-800'>{name}</td>
            <td className='text-lg text-orange-700'>{category}</td>
            <td className='text-lg text-lime-700'>{price}</td>
            <td className='text-lg text-violet-800'>{quantity}</td>
            <Link to={`/singleToys/${_id}`} className='btn btn-success mt-2'>View Details</Link>
        </tr>
    );
};

export default AllToyRow;
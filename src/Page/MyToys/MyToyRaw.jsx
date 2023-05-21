import React from 'react';
import { Link } from 'react-router-dom';

const MyToyRaw = ({myToy,handleDelete}) => {
    // console.log(myToy)
    const {_id, name, price,  category ,img, quantity } = myToy
    return (
        <tr>
           
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-32 h-32 rounded-xl">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className='text-teal-500'>{name}</td>
            <td className='text-violet-400'>
              {category}
            
            </td>
            <td className='text-yellow-600'>{parseFloat(price)}</td>
            <td className='text-blue-600'>{quantity}</td>
            <th>
                <Link to={`/updated/${_id}`} className="btn btn-info ">Updated</Link>
           
            </th>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-error">Remove</button>
            </th>
        </tr>

    );
};

export default MyToyRaw;
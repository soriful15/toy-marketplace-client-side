import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToyRaw from './MyToyRaw';
import Swal from 'sweetalert2'
import useTitle from '../../hooks/UseTitle';
const MyToys = () => {
    useTitle('My Toys')
    const [myToys, setMyToys] = useState([])
    const [sortOrder, setSortOrder] = useState('');

    const { user } = useContext(AuthContext)

    const url = `  https://toy-marketplace-server-side-azure.vercel.app /myToys?email=${user?.email}&sort=${sortOrder}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url, user])


    // const handleDelete = (_id) => {
    //     console.log(_id)
    //     fetch(`https://toy-marketplace-server-side-azure.vercel.app /delete/${_id}`, {
    //         method: 'DELETE',

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.deletedCount > 0) {
    //                 Swal.fire({
    //                     title: 'Are you sure?',
    //                     text: "You won't be able to revert this!",
    //                     icon: 'warning',
    //                     showCancelButton: true,
    //                     confirmButtonColor: '#3085d6',
    //                     cancelButtonColor: '#d33',
    //                     confirmButtonText: 'Yes, delete it!'
    //                 }).then((result) => {
    //                     if (result.isConfirmed) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your file has been deleted.',
    //                             'success'
    //                         )
    //                     }
    //                 })

    //             }


    //         })
    //     const remaining = myToys.filter(toy => toy._id !== _id)
    //     setMyToys(remaining)
    // }
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-side-azure.vercel.app /delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
        const remaining = myToys.filter(toy => toy._id !== _id)
        setMyToys(remaining)
    }
























    const handleSortOrderChange = (e) => {
        console.log(e.target.value)
        setSortOrder(e.target.value)
    };







    return (
        <>

            <h1 className='text-center font-bold text-5xl text-purple-950 mt-7'>My Animal Toys collection:{myToys.length}</h1>


            <p className='text-center font-bold text-xl text-orange-400 mt-5'>Sort the toys</p>
            <div className='flex gap-1 justify-center mt-2'>

                {/* <button onClick={handleSort} className="btn btn-outline btn-primary">Low Price</button>
                <button onClick={handleSort} className="btn btn-outline">High Price</button> */}


                <select
                    value={sortOrder}
                    onChange={handleSortOrderChange}
                    className="select select-primary  max-w-xs"
                >
                    <option value="" disabled>Best Match</option>
                    <option value="lowest">Price(Low to high)</option>
                    <option value="highest">Price(High to low)</option>
                </select>



            </div>

            <div className="overflow-x-auto w-full container mx-auto mt-20">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Updated</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myToys.map(myToy => <MyToyRaw
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                            ></MyToyRaw>)
                        }

                    </tbody>


                </table>
            </div>




        </>
    );
};

export default MyToys;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToyRaw from './MyToyRaw';
import Swal from 'sweetalert2'
import useTitle from '../../hooks/UseTitle';
const MyToys = () => {
useTitle('My Toys')
    const [myToys, setMyToys] = useState([])
    // const [sort, setSort] = useState("a");

    // const [sortOrder, setSortOrder] = useState('asc'); // or 'desc'
    // const [sortDirection, setSortDirection] = useState(1);



    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/myToys/${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))


    }, [url])
    const handleDelete = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/delete/${_id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
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
                            // console.log('Deleted Confirmed')

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                   /*  Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    ) */
                }


            })
        const remaining = myToys.filter(toy => toy._id !== _id)
        setMyToys(remaining)
    }

    // const handleSort = () => {
    //     const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    //     const newSortDirection = sortOrder === 'asc' ? -1 : 1;
    
    //     setSortOrder(newSortOrder);
    //     setSortDirection(newSortDirection);
    
    //     // Sort the toy data based on the new sort order and direction
    //     const sortedToys = myToys.sort((a, b) => (a.price - b.price) * newSortDirection);
    //     setMyToys([...sortedToys]);
    //   };







    return (
        <>

            <h1 className='text-center font-bold text-5xl text-purple-950 mt-7'>My Animal Toys collection:{myToys.length}</h1>


            <p className='text-center font-bold text-xl text-orange-400 mt-5'>Sort the toys</p>
            <div className='flex gap-1 justify-center mt-2'>

                {/* <button onClick={handleSort} className="btn btn-outline btn-primary">Low Price</button>
                <button className="btn btn-outline">High Price</button> */}
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
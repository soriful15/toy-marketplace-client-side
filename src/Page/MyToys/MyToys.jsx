import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToyRaw from './MyToyRaw';

const MyToys = () => {

    const [myToys, setMyToys] = useState([])

    const { user } = useContext(AuthContext)
    // const url=`http://localhost:5000/myToys?seller_email=${user?.email}`
    const url = `http://localhost:5000/myToys/${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))


    }, [url])

    return (
        <>

            <h1 className='text-center font-bold text-5xl text-purple-950 mt-7'>My Animal Toys collection:{myToys.length}</h1>

            {
                console.log(myToys)
            }

            <div className="overflow-x-auto w-full container mx-auto mt-20">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Ratings</th>
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

                            ></MyToyRaw>)
                        }

                    </tbody>


                </table>
            </div>




        </>
    );
};

export default MyToys;
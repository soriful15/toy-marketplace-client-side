import React, { useEffect, useState } from 'react';
import AllToyRow from './AllToyRow';

const AllToy = () => {


    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allCollection`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])



    return (
        <>

            <h1 className='text-center font-bold text-5xl text-purple-400 mt-7'>All Animal Toys Collection:{allToys.length}</h1>



            <div className="overflow-x-auto container mx-auto mt-11">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            allToys.map((allToy,index) => <AllToyRow
                                key={allToy._id}
                                allToy={allToy}
                                index={index+1}
                            ></AllToyRow>)
                        }

                        




                    </tbody>

                </table>
            </div>




        </>
    );
};

export default AllToy;
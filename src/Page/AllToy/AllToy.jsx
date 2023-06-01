import React, { useEffect, useState } from 'react';
import AllToyRow from './AllToyRow';
import useTitle from '../../hooks/UseTitle';

const AllToy = () => {

useTitle('All Toy')
    const [allToys, setAllToys] = useState([])
    const [search, setSearch] = useState("a")
    useEffect(() => {
        fetch(`https://toy-marketplace-server-side-azure.vercel.app /allCollection`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])



    const handleSearch = () => {
        fetch(`https://toy-marketplace-server-side-azure.vercel.app /toySearch/${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllToys(data)
            })
    }


    return (
        <>

            <h1 className='text-center font-bold text-5xl text-purple-400 mt-7'>All Animal Toys Collection:{allToys.length}</h1>
            <div className='text-center flex justify-center gap-3 mt-6 '>

                <button onClick={handleSearch} className="btn btn-success">Search Toy</button>
                <input onChange={(e) => setSearch(e.target.value)} className='border-4 border-solid border-stone-700 px-2 py-2 ' type="text" placeholder='Search' />

            </div>

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
                            allToys.map((allToy, index) => <AllToyRow
                                key={allToy._id}
                                allToy={allToy}
                                index={index + 1}
                            ></AllToyRow>)
                        }






                    </tbody>

                </table>
            </div>




        </>
    );
};

export default AllToy;
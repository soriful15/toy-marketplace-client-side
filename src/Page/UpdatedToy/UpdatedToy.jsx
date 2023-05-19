import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
const UpdatedToy = () => {

    const updated = useLoaderData()
    console.log(updated)
    const { _id, name, price, quantity, seller_name, category, details, img, ratings, seller_email } = updated

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);


        fetch(`http://localhost:5000/allCollection/${_id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated  Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <>




            <div className='container mx-auto'>
                <h1 className='text-center mt-10 text-4xl text-sky-800 '>Updated Animal Toy</h1>


                <form onSubmit={handleSubmit(onSubmit)} className='mt-16'>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='grid lg:grid-cols-2 gap-4 px-2'>




                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>

                            <input type="url" placeholder="Enter Your ToyPhoto" className="input input-bordered"  {...register("img")} defaultValue={img} />
                        </div>


                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>

                            <input type="text" placeholder="Enter Your Toy Name" className="input input-bordered"  {...register("name")} defaultValue={name} />
                        </div>


                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>

                            <input type="text" placeholder="Enter Your Name" className="input input-bordered" defaultValue={seller_name} {...register("seller_name")} />
                        </div>


                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="text" placeholder="Enter Your Email" className="input input-bordered" defaultValue={seller_email} {...register("seller_email")} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="Quantity" className="input input-bordered" {...register("quantity", { required: true })} defaultValue={quantity} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="price" className="input input-bordered" {...register("price", { required: true })} defaultValue={price} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" className="input input-bordered" {...register("ratings")} defaultValue={ratings} />
                        </div>


                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>

                            <input type="text" placeholder="Details" className="input input-bordered"  {...register("details")} defaultValue={details} />
                        </div>

                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("category")} className="input input-bordered" defaultValue={category}>
                                <option value="Horse">Horse</option>
                                <option value="Dinosaur">Dinosaur</option>
                                <option value="Cat">Cat</option>
                                <option value="Teddy Bear">Teddy Bear</option>
                            </select>

                        </div>





                    </div>
                    <div className="form-control mt-6">

                        <input className='btn btn-success btn-block' type="submit" value="Add Confirm" />
                    </div>

                </form>


            </div>



        </>
    );
};

export default UpdatedToy;
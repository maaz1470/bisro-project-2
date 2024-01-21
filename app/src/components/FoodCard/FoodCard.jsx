import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../hook/useCart';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const {user} = useContext(AuthContext)
    const [,refetch] = useCart();

    const handleAddToCart = (item) => {
        if(user){
            const data = {
                email: user.email,
                id: item._id,
                name,
                image,
                price,
                recipe
            }
            fetch(`http://localhost:5000/add-cart`,{
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            }).then(res => res.json()).then(response => {
                Swal.fire('Success', 'Product successfully added to cart','success')
                refetch();
            })
        }else{
            Swal.fire('Error', 'Please login first','error')
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 mx-4'>${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
import React from 'react';
import FoodCard from '../../FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-10'>
                        {
                            items.map(item => <FoodCard key={item._id} item={item} />)
                        }
                    </div>
        </div>
    );
};

export default OrderTab;
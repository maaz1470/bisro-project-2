import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../shared/SectionTitle';
import MenuItem from '../../../shared/MenuItem/MenuItem';
import useMenu from '../../../hook/useMenu';

const PopularMenu = () => {
    // const [menus, setMenus] = useState([])
    // useEffect(() => {
    //     fetch('menu.json').then(res => res.json()).then(response => {
    //         const populars = response.filter(item => item.category === 'popular')
    //         setMenus(populars)
    //     })
    // },[])
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <div className='mb-12'>
            <SectionTitle heading={'From Menu'} subHeading={'Popular Items'} />
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 ml-4'>View Full Menu</button>
        </div>
    );
};

export default PopularMenu;
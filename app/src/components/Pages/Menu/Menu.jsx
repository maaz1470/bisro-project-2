import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import MenuImage from './../../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import { Parallax } from 'react-parallax';
import useMenu from '../../hook/useMenu';
import SectionTitle from '../../shared/SectionTitle';
import MenuCategory from './MenuCategory';
import Dessert from './../../../assets/menu/dessert-bg.jpeg'
import Pizza from './../../../assets/menu/pizza-bg.jpg'
import Salad from './../../../assets/menu/salad-bg.jpg'
import Soup from './../../../assets/menu/soup-bg.jpg'
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Hello World</title>
            </Helmet>
            <Cover img={MenuImage} title={'Our Menu'}></Cover>
            <SectionTitle subHeading={'Dont Miss'} heading={'Todays offer'} />
            <MenuCategory items={offered} />
            <MenuCategory items={desserts} title={'Desserts'}
                coverImg={Dessert}
            />
            <MenuCategory items={pizza} title={'Pizza'}
                coverImg={Pizza}
            />
            <MenuCategory items={soup} title={'Soup'}
                coverImg={Soup}
            />
            <MenuCategory items={salad} title={'Salad'}
                coverImg={Salad}
            />
        </div>
    );
};

export default Menu;
import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Category from '../Category/Category';

const Home = () => {
    const [category,setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h2>this is home</h2>
            <Category count={category}></Category>
        </div>
    );
};

export default Home;
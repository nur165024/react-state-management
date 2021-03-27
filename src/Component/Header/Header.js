import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category,setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h2>this is header</h2>
            <p>Count : {category}</p>
            <button onClick={() => setCategory(category + 1)}>click</button>
            <hr/>
        </div>
    );
};

export default Header;
import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h6>this is category details : {category}</h6>
            <p>context text : {category}</p>
        </div>
    );
}

export default CategoryDetails;
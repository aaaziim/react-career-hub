import { useState, useEffect } from "react";
import Category from "../Category/Category";


const CategoryList = () => {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className="my-10">
            <div>
                <h2 className="text-5xl text-center">Job Category List : {categories.length}</h2>
                <p className="text-center py-4">Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>

            <div className="grid grid-cols-2  md:grid-cols-4 gap-4 p-10 ">
                {categories.map(category => <Category
                    key={category.id}
                    category={category}></Category>)}
            </div>
        </div>
    );
};

export default CategoryList;
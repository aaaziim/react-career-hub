
const Category = ({ category }) => {

    const { logo, category_name, availability } = category;
    return (
        <div className="bg-gray-100 border-blue-200 text-black border-4 p-4 rounded-xl">
            <img className="w-16 rounded-xl" src={logo} alt="" />
            <h3 className="text-2xl my-3">{category_name}</h3>
            <p className="my-3">{availability}</p>

        </div>
    );
};

export default Category;
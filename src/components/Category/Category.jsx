import React from 'react';

const Category = ({items}) => {
    const {img, category, totalJob} = items;
    return (
        <div>
            <div className="mb-4">
              <img
                className="bg-purple-100 p-3 rounded-lg"
                src={img}
                alt=""
              />
            </div>

            <h3 className="font-bold text-xl text-gray-700">
              {category}
            </h3>
            <p className="mt-1 text-gray-500">{totalJob} Jobs Available</p>
        </div>
    );
};

export default Category;
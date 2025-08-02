import React from "react";

const Boo = ({ book }) => {
  const { image, bookName, author } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-6">
      <figure className="bg-blue-200 py-8 rounded-2xl">
        <img
          src={image}
          className="h-[166px]"
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Boo;

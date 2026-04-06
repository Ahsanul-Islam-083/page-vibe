import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm transition hover:scale-105 group hover:no-underline focus:no-underline">
            <figure className='m-4 rounded-2xl p-6 bg-base-200'>
                <img className='rounded-xl h-62.5'
                    src={book.image}
                    alt={book.bookName} />
            </figure>
            <div className="card-body">
                <div className='flex gap-4'>
                    {book.tags.map((tag,i) => <div key={i} className="badge badge-soft badge-success font-bold">{tag}</div>)
                    }
                </div>
                <h2 className="card-title text-2xl group-hover:underline group-focus:underline">
                    {book.bookName}
                </h2>
                <p className='font-semibold text-lg text-gray-500'>By: {book.author}</p>
                <div className="card-actions border-t border-dashed pt-4 border-gray-300 justify-between font-semibold text-xl text-gray-500">
                    <div className="">{book.category}</div>
                    <div className=" flex gap-2 items-center">{book.rating} <FaRegStar /> </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;
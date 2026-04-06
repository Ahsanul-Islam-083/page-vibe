import React, { use } from 'react';
import BookCard from '../Ui/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {

    const books = use(booksPromise);
    console.log("boks: ", books);
    return (
        <div className='container mx-auto my-12'>
            <h2 className='font-bold text-3xl text-center mb-6'>Books</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    books.map(book => <BookCard key={book.bookId} book={book}/>)
                }
            </div>
        </div>
    );
};

export default AllBooks;
// import React, { useContext, useEffect, useState } from 'react';
import React, { useContext, } from 'react';
import { BookContext } from '../../context/ContextOriginal';
import BookCard from '../Ui/BookCard';

const ListedWishList = ({ sortingType }) => {
    const { wishlist } = useContext(BookContext);


    // const [filteredWishList, setFilteredWishList] = useState(wishlist)

    // useEffect(() => {
    //     if (sortingType) {
    //         if (sortingType === 'pages') {
    //             const sortedData = [...wishlist].sort((a, b) => a.totalPages - b.totalPages)
    //             console.log(sortedData);
    //             setFilteredWishList(sortedData);
    //         } else if (sortingType === 'rating') {
    //             const sortedData = [...wishlist].sort((a, b) => a.rating - b.rating)
    //             console.log(sortedData);
    //             setFilteredWishList(sortedData);
    //         }
    //     }
    // }, [sortingType, wishlist])

    // ------this if-else or conditional statement is good in this case

    let filteredWishList = wishlist;

    if (sortingType === 'pages') {
        filteredWishList = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === 'rating') {
        filteredWishList = [...wishlist].sort((a, b) => a.rating - b.rating);
    }

    if (filteredWishList.length === 0) {
        return (
            <div className='py-6 flex flex-col items-center justify-center text-center min-h-[75vh] bg-base-200 rounded-2xl'>
                <p className='text-7xl mb-3'>📚</p>
                <h3 className='text-3xl font-bold text-gray-700'>No books added yet</h3>
                <p className='text-xl text-gray-400 mt-1'>Books you wish to read will appear here.</p>
            </div>
        );
    }

    return (
        <div className='py-6'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    filteredWishList.map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default ListedWishList;
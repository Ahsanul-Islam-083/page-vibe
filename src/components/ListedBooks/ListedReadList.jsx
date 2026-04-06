import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../Ui/BookCard';

const ListedReadList = ({ sortingType }) => {

    const { readList } = useContext(BookContext);

    const [filteredReadList, setFilteredReadList] = useState(readList)

    useEffect(() => {
        if (sortingType) {
            if (sortingType === 'pages') {
                const sortedData = [...readList].sort((a, b) => a.totalPages - b.totalPages)
                console.log(sortedData);
                setFilteredReadList(sortedData);
            } else if (sortingType === 'rating') {
                const sortedData = [...readList].sort((a, b) => a.rating - b.rating)
                console.log(sortedData);
                setFilteredReadList(sortedData);
            }
        }
    }, [sortingType, readList])

    if (filteredReadList.length === 0) {
        return (
            <div className='py-6 flex flex-col items-center justify-center text-center min-h-[75vh] bg-base-200 rounded-2xl'>
                <p className='text-7xl mb-3'>📚</p>
                <h3 className='text-3xl font-bold text-gray-700'>No books added yet</h3>
                <p className='text-xl text-gray-400 mt-1'>Books you mark as read will appear here.</p>
            </div>
        );
    }

    return (
        <div className='py-6'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    filteredReadList.map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default ListedReadList;
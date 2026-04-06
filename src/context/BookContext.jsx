import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();


const BookProvider = ({ children }) => {

    const[readList, setReadList] = useState([]);
    const[wishlist, setWishList] = useState([])

    const handleMarkAsRead = (currentBook) => {
        // step 1: store book id or store book object
        // step 2: where to store
        // step 2: array or collection
        // step 3: If the book is already exist then show a alert or toast
        // step 4: if not then add the book in the array or collection

        // console.log('bookId : ',id);

        const isExistBook = readList.find(book => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error('The book is exist in the read list')
        }else{
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} is added to the read list`)
        }

        console.log(currentBook,readList);

    }
    
    const handleWishList = (currentBook) => {
        // step 1: store book id or store book object
        // step 2: where to store
        // step 2: array or collection
        // step 3: If the book is already exist then show a alert or toast
        // step 4: if not then add the book in the array or collection

        // console.log('bookId : ',id);

        const isExistInReadList =readList.find (book => book.bookId === currentBook.bookId);

        if (isExistInReadList) {
            toast.error("This book is already exists in read list");
            return;
        }

        const isExistBook = wishlist.find(book => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error('The book is exist in the wish list')
        }else{
            setWishList([...wishlist, currentBook]);
            toast.success(`${currentBook.bookName} is added to the wish list`)
        }

        console.log(currentBook,readList);

    }

    const data = {
        readList,
        setReadList,
        handleMarkAsRead,
        wishlist,
        setWishList,
        handleWishList
    }



    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;
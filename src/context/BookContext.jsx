import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();


const BookProvider = ({ children }) => {

    const[storedBooks, setStoredBooks] = useState([]);
    const[wishlist, setWishList] = useState([])

    const handleMarkAsRead = (currentBook) => {
        // step 1: store book id or store book object
        // step 2: where to store
        // step 2: array or collection
        // step 3: If the book is already exist then show a alert or toast
        // step 4: if not then add the book in the array or collection

        // console.log('bookId : ',id);

        const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error('The book is exist in the read list')
        }else{
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to the read list`)
        }

        console.log(currentBook,storedBooks);

    }
    
    const handleWishList = (currentBook) => {
        // step 1: store book id or store book object
        // step 2: where to store
        // step 2: array or collection
        // step 3: If the book is already exist then show a alert or toast
        // step 4: if not then add the book in the array or collection

        // console.log('bookId : ',id);

        const isExistInReadList =storedBooks.find (book => book.bookId === currentBook.bookId);

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

        console.log(currentBook,storedBooks);

    }

    const data = {
        storedBooks,
        setStoredBooks,
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
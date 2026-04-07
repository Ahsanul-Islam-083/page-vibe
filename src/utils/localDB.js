
const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem('readList');
    // console.log(allReadList);
    if (allReadList) {
        return JSON.parse(allReadList);
    }
    return [];
}

const addReadListToLocalDb = (book) => {
    const allBooks = getAllReadListFromLocalDB();
    const isAllReadyExists = allBooks.find(bk => bk.bookId === book.bookId);
    if (!isAllReadyExists) {
        //ei data ta local db te add krte chai
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks))
    }
}

const getAllWishListFromLocalDb = () => {
    const allWishList = localStorage.getItem("wishList");
    if (allWishList) {
        return JSON.parse(allWishList);
    }
    return [];
}

const addWishListToLocalDB = (book) => {
    const allBooks = getAllWishListFromLocalDb();
    const isAlreadyExistsInAllWishList = allBooks.find(bk => bk.bookId === book.bookId);
    if (!isAlreadyExistsInAllWishList) {
        allBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allBooks));
    }
}


export { getAllReadListFromLocalDB, addReadListToLocalDb, getAllWishListFromLocalDb, addWishListToLocalDB }
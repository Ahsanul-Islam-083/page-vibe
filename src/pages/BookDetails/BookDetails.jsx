// import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    // const booksPromise = fetch('/booksData.json').then(res => res.json());
    const books = useLoaderData();
    const { id } = useParams();

    // const books = use(booksPromise);
    // console.log("books: ", books);

    // const expectedBook = books.find (book => book.bookId == id)(opt.1)

    // const bookId = parseInt(id);
    // console.log(bookId);
    // const expectedBook = books.find (book => book.bookId === bookId)(opt.2)

    const expectedBook = books.find(book => book.bookId === Number(id)) //(opt.3)
    console.log(expectedBook);

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = expectedBook;


    return (
        <div className='container mx-auto py-12'>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure className='flex-1 bg-base-200 rounded-2xl m-4'>
                    <img className='h-52 w-40 object-contain p-2'
                        src={image}
                        alt="Album" />
                </figure>
                <div className="card-body flex-2">
                    <h2 className="card-title md:text-3xl">{bookName}</h2>
                    <h2 className="text-sm font-normal md:font-semibold card-title">By: {author}</h2>
                    <div className='py-2 border-y border-gray-300'>{category}</div>
                    <p className='text-gray-500'><span className='font-bold text-black'>Review : </span>{review}</p>
                    <div className='flex gap-4'>
                        <div>Tag</div> <div>
                            <div className='flex gap-4'>
                                {tags.map((tag, i) => <div key={i} className="badge badge-soft badge-success">#{tag}</div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="card-actions flex-col border-t border-gray-300 py-2">
                        <div>
                            <table className="">
                                <tbody>
                                    <tr className="">
                                        <td className="p-3 text-xs sm:text-base">
                                            <p>Number of Pages :</p>
                                        </td>
                                        <td className="p-3 text-xs sm:text-base font-semibold">
                                            <p>{totalPages}</p>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="p-3 text-xs sm:text-base">
                                            <p>Publisher :</p>
                                        </td>
                                        <td className="p-3 text-xs sm:text-base font-semibold">
                                            <p>{publisher}</p>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="p-3 text-xs sm:text-base">
                                            <p>Year of Publishing :</p>
                                        </td>
                                        <td className="p-3 text-xs sm:text-base font-semibold">
                                            <p>{yearOfPublishing}</p>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="p-3 text-xs sm:text-base">
                                            <p>Rating :</p>
                                        </td>
                                        <td className="p-3 text-xs sm:text-base font-semibold">
                                            <p>{rating}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='flex gap-3'>
                            <button className="btn">Listen</button>
                            <button className="btn btn-info text-white">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
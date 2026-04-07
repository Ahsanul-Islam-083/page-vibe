// import React, { useContext } from 'react';
// import { BookContext } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';
import { useState } from 'react';

const Books = () => {

    const [sortingType, setSortingType] = useState('')

    return (
        <div className='container mx-auto my-12 min-h-[75vh]'>
            <div className='h-28 flex justify-center items-center bg-base-200 rounded-2xl'>
                <h2 className='text-3xl font-bold'>Books</h2>
            </div>

            <div className='flex justify-center items-center pt-6'>
                <div className="dropdown dropdown-art">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by {sortingType} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>setSortingType("pages")}><a>Pages</a></li>
                        <li onClick={()=>setSortingType('rating')}><a>Rating</a></li>
                    </ul>
                </div>
            </div>
            <Tabs className='my-4'>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList sortingType={sortingType} />
                </TabPanel>

                <TabPanel>
                    <ListedWishList sortingType={sortingType} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;
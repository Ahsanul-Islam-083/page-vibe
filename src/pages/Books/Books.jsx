import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Books = () => {

    const {storedBooks, wishlist} = useContext(BookContext);
    console.log(storedBooks);
    
    
    return (
        <div className='container mx-auto'>
            ListedBooks
            <Tabs className='my-4'>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>{storedBooks.length}</h2>
                </TabPanel>

                <TabPanel>
                    <h2>{wishlist.length}</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;
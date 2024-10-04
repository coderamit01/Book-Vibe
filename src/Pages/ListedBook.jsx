import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ListBookItem from '../Components/ListBookItem/ListBookItem';
import { getReadData, getWishlistData } from '../Utilities/localstorage';

const ListedBook = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [read, setRead] = useState([]);

  const allBooks = useLoaderData();

  useEffect(() => {
    const savedWishlistData = getWishlistData();
    const savedReadtData = getReadData();

    if (allBooks.length > 0) {
      const currentData = [];
      for (const id of savedWishlistData) {
        const currentWishlist = allBooks.find(book => book.bookId === id);
        currentData.push(currentWishlist);
      }
      setWishlist(currentData);
    }
    if (allBooks.length > 0) {
      const currentData = [];
      for (const id of savedReadtData) {
        const currentWishlist = allBooks.find(book => book.bookId === id);
        currentData.push(currentWishlist);
      }
      setRead(currentData);
    }
  }, [allBooks])


  return (
    <div>
      <div className="container mx-auto px-3">
        <h2 className='text-3xl font-bold text-center p-4 rounded-lg bg-base-200'>Books</h2>
        <div className='py-12'>
          <div className='text-center mb-4'>
            <select className="select select-success w-2/12 max-w-xs">
              <option disabled selected>Sort By</option>
              <option>Rating</option>
              <option>Number of pages</option>
              <option>Publisher year</option>
            </select>
          </div>
          <div>
            <div>
              <div role="tablist" className="tabs tabs-boxed flex">
                <Link role="tab" className={`tab ${activeTab === 0 ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab(0)}>Read Books</Link>
                <Link role="tab" className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab(1)}> Wishlist Books</Link>
              </div>
              <div className="mt-4">
                {activeTab === 0 &&
                  <div className='grid grid-cols-1 gap-4'>
                    {
                      read.map(book => <ListBookItem key={book.bookId} book={book} />)
                    }
                  </div>
                }
                {activeTab === 1 &&
                  <div className='grid grid-cols-1 gap-4'>
                    {
                      wishlist.map(book => <ListBookItem key={book.bookId} book={book} />)
                    }
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
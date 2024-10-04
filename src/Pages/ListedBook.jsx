import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListBookItem from '../Components/ListBookItem/ListBookItem';

const ListedBook = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('../../../public/bookData.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  return (
    <div>
      <div className="container mx-auto px-3">
        <h2 className='text-3xl font-bold text-center p-4 rounded-lg bg-base-200'>Books</h2>
        <div className='py-12'>
          <div className='text-center'>
            <select className="select select-success w-2/12 max-w-xs">
              <option disabled selected>Sort By</option>
              <option>Rating</option>
              <option>Number of pages</option>
              <option>Publisher year</option>
            </select>
          </div>
          <div>
            <div>
              <div role="tablist" className="tabs tabs-boxed">
                <Link role="tab" className={`tab ${activeTab === 0 ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab(0)}>Tab 1 </Link>
                <Link role="tab" className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab(1)}>Tab 2</Link>
              </div>
              <div className="mt-4">
                {activeTab === 0 &&
                  <div className='grid grid-cols-1 gap-4'>
                    {
                      books.map(book => <ListBookItem key={book.bookId} book={book} />)
                    }
                  </div>
                }
                {activeTab === 1 &&
                  <div className='grid grid-cols-1 gap-4'>
                  {
                    books.map(book => <ListBookItem key={book.bookId} book={book} />)
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
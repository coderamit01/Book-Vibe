import React, { useEffect, useState } from 'react';
import BookItem from '../BookItem/BookItem';

const BookSection = () => {
  const [books,setBooks] = useState([]);

  useEffect(() => {
    fetch('../../../public/bookData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])

  return (
    <div className='py-12'>
      <div className="container mx-auto px-3">
        <h2 className='text-4xl font-bold text-center text-black'>Books</h2>
        <div className='pt-6 grid md:grid-cols-3 gap-5'>
          {
            books.map(book => <BookItem key={book.bookId} book={book} />)
          }
        </div>
      </div>
    </div>
  );
};

export default BookSection;
import React from 'react';
import { BiStar } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  const {bookId, bookName, author, image, category, rating, } = book;
  return (
    <div className='border border-gray-100 rounded-md p-4'>
      <Link to={`/bookdetails/${bookId}`}>
        <div className='bg-gray-100 px-4 py-8 rounded-xl mb-4'>
          <img src={image} alt={bookName} className='mx-auto w-32 h-40 object-contain' />
        </div>
        <div className='flex items-center space-x-4'>
          {
            category.map((ct, id) =>
              <span key={id} className='text-[#23BE0A] py-1 px-3 rounded-full bg-[#22be0a19]'>{ct}</span>
            )
          }
        </div>
        <div className='space-y-2 borderdashed border-b border-gray-200 py-2'>
          <h4 className='text-2xl font-semibold'>{bookName}</h4>
          <p className='text-base text-slate-700 font-semibold'>By: {author}</p>
        </div>
        <div className='flex items-center justify-between pt-2'>
          <p className='text-base text-slate-700 font-semibold'>Fiction</p>
          <div className='flex items-center'>
            <span className='text-base text-slate-700 font-semibold'>{rating}</span>
            <span className='text-base text-slate-700 font-semibold'><BiStar /></span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookItem;
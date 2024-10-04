import React from 'react';
import { BiStar } from 'react-icons/bi';
import { useLoaderData, useParams } from 'react-router-dom';
import BluBtn from '../share/BluBtn/BluBtn';
import BorderBtn from '../share/BorderBtn/BorderBtn';

const BookDetails = () => {
  const book = useLoaderData();
  const { id } = useParams();
  const currentId = parseInt(id);
  const currentBook = book.find(item => item.bookId === currentId);
  const { bookName, author, image, category, rating, review, totalPages, tags, publisher, yearOfPublishing } = currentBook;
  return (
    <div className='pt-5 pb-12'>
      <div className="container mx-auto px-3">
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='bg-gray-100 px-4 py-8 rounded-xl flex items-center justify-center'>
            <img src={image} alt={bookName} className='w-32 h-40 object-contain' />
          </div>
          <div className='px-3'>
            <div className='space-y-2 borderdashed border-b border-gray-200 py-2'>
              <h2 className='text-3xl font-semibold'>{bookName}</h2>
              <p className='text-base text-slate-700 font-semibold'>By: {author}</p>
            </div>
            <div className='flex items-center space-x-2 py-3 borderdashed border-b border-gray-200'>
              <div><strong>Category</strong></div>
              <div className='flex items-center space-x-4'>
                {
                  category.map((ct, id) =>
                    <span key={id} className='text-[#23BE0A] py-[3px] px-3 rounded-full bg-[#22be0a19]'>{ct}</span>
                  )
                }
              </div>
            </div>
            <div className='py-3 space-y-3 borderdashed border-b border-gray-200'>
              <p className='text-base text-slate-700 font-semibold'><strong>Review: </strong>{review}</p>
              <div className='flex items-center space-x-3'>
                <div><strong>Tags</strong></div>
                <div className='flex items-center space-x-4'>
                  {
                    tags.map((ct, id) =>
                      <span key={id} className='text-[#23BE0A] py-[3px] px-3 rounded-full bg-[#22be0a19]'>{ct}</span>
                    )
                  }
                </div>
              </div>
            </div>
            <div className='space-y-2 pt-2'>
              <div className='grid grid-cols-3 gap-2'>
                <p className='text-base text-slate-700 font-semibold'>Number of Pages:</p>
                <strong className='col-span-2'>{totalPages}</strong>
              </div>
              <div className='grid grid-cols-3 gap-2'>
                <p className='text-base text-slate-700 font-semibold'>Publisher:</p>
                <strong className='col-span-2'>{publisher}</strong>
              </div>
              <div className='grid grid-cols-3 gap-2'>
                <p className='text-base text-slate-700 font-semibold'>Year of Publishing:</p>
                <strong className='col-span-2'>{yearOfPublishing}</strong>
              </div>
              <div className='grid grid-cols-3 gap-2'>
                <p className='text-base text-slate-700 font-semibold'>Rating:</p>
                <div className='col-span-2'>
                  <strong className='flex items-center space-x-1'>
                    <sapn>{rating}</sapn>
                    <BiStar />
                  </strong>
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-2 pt-3'>
              <BorderBtn text="Read" link="#" />
              <BluBtn text="Wishlist" link="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
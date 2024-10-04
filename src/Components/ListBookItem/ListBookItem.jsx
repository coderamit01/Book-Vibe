import { useEffect } from 'react';
import { BiMap } from 'react-icons/bi';

const ListBookItem = ({ book }) => {
  const { tags, bookName, author, image, category, rating, totalPages, yearOfPublishing, publisher } = book;
  return (
    <div className='border border-gray-100 rounded-md p-4 grid grid-cols-4 gap-5'>
      <div className='bg-gray-100 px-4 py-8 rounded-xl mb-4'>
        <img src={image} alt={bookName} className='mx-auto w-32 h-40 object-contain' />
      </div>
      <div className='col-span-3'>
        <div className='space-y-2 py-3'>
          <h4 className='text-2xl font-semibold'>{bookName}</h4>
          <p className='text-base text-slate-700 font-semibold'>By: {author}</p>
        </div>
        <div className='flex items-center space-x-3 py-1'>
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
          <div className='flex items-center space-x-1'>
            <BiMap />
            <span>Year Of Publishing: {yearOfPublishing}</span>
          </div>
        </div>
        <div className='flex items-center space-x-3 pt-2 borderdashed border-b border-gray-200 py-3'>
          <div className='flex items-center space-x-1'>
            <BiMap />
            <span>Publisher: {publisher}</span>
          </div>
          <div className='flex items-center space-x-1'>
            <BiMap />
            <span>Page: {totalPages}</span>
          </div>
        </div>
        <div className='flex items-center space-x-3 pt-3'>
          <div className='flex items-center space-x-2 bg-[#328eff2a] py-[3px] px-3 rounded-full'>
            <span className='text-[#328efffb]'>Category:</span>
            <div className='flex items-center space-x-2'>
              {
                category.map((ct, id) =>
                  <span key={id} className='text-[#328efffb]'>{ct}</span>
                )
              }
            </div>
          </div>
          <button className='bg-[#ffad332c] text-[#FFAC33] py-[3px] px-3 rounded-full'>Rating: {rating}</button>

          <button className='bg-[#23BE0A] text-white py-[3px] px-3 rounded-full'>View Details</button>

        </div>
      </div>
    </div>
  );
};

export default ListBookItem;
import React from 'react';
import { Link } from 'react-router-dom';

const BorderBtn = ({text,link}) => {
  return (
    <Link to={link} className='bg-white border border-gray-400 text-black py-[10px] px-5 rounded inline-block text-center cursor-pointer'>
      {text}
    </Link>
  );
};

export default BorderBtn;
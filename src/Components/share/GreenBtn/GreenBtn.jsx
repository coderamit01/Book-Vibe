import React from 'react';
import { Link } from 'react-router-dom';

const GreenBtn = ({text,link}) => {
  return (
    <Link to={link} className='bg-[#23BE0A] text-white py-[10px] px-5 rounded inline-block text-center cursor-pointer'>
      {text}
    </Link>
  );
};

export default GreenBtn;
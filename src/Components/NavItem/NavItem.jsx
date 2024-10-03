import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({text,link}) => {
  return (
      <NavLink to={link} className='btn min-h-1 border border-white bg-white shadow-none hover:border-[#23BE0A] hover:text-[#23BE0A] hover:bg-white active:border-[#23BE0A] active:!text-[#23BE0A] active:!bg-white focus:border-[#23BE0A] focus:bg-white focus:text-[#23BE0A]'>{text}</NavLink>
  );
};

export default NavItem;
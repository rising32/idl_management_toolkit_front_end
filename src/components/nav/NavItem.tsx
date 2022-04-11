import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

export interface NavProps {
  to: string;
  pathName: string;
  active_image: string;
  inactive_image: string;
}

const NavItem = ({ item }: { item: NavProps }) => {
  const location = useLocation();
  const isActive = location.pathname.split('/')[1] === item.to.split('/')[1];

  return (
    <NavLink to={item.to} className='flex flex-col items-center'>
      <div className='flex items-center'>
        <img src={isActive ? item.active_image : item.inactive_image} alt='Logo' className='w-auto h-6' />
      </div>
      <p className={`text-lg ${isActive ? 'text-rouge-blue' : 'text-white'}`}>{item.pathName}</p>
    </NavLink>
  );
};

export default NavItem;

import React from 'react';
import carIcon from '../assets/icons/car.svg';
import infoIcon from '../assets/icons/info.svg';
import buyIcon from '../assets/icons/dollar.svg';
import nissanFailady from '../assets/Cars/Nissan Fairlady 300ZX (Z32) 1989.png';
import Navbar from './navbar';

const infoList = [
  {
    icon: carIcon,
    heading: 'Model'
  },
  {
    icon: infoIcon,
    heading: 'Info'
  },
  {
    icon: buyIcon,
    heading: 'Buy'
  },
];

const carInfo = {
  company: 'Nissan',
  makeModel: 'Fairlady 300ZX'
};

export default function Main() {
  const handleLinkClick = (event) => {
    event.preventDefault(); 
  };

  return (
    <>
      <div className='relative'>
        <div className='absolute top-0'>
          <Navbar />
        </div>
        <div className="main-container w-full h-screen flex justify-center items-center relative">
          <ul className="absolute left-4 flex flex-col gap-4">
            {infoList.map((item, index) => (
              <a className='flex h-auto items-center' key={index} href="" onClick={handleLinkClick}>
                <li className="py-12 px-12 mr-6 rounded-full bg-slate-100 text-white flex justify-center items-center">
                  <img className='w-24' src={item.icon} alt="" />
                </li>
                {item.heading}
              </a>
            ))}
          </ul>
          <div className="flex justify-center">
            <div className="">
              <h3 className="text-42 font-medium absolute">{carInfo.company}</h3>
              <h1 className="text-128 font-bold">{carInfo.makeModel}</h1>
              <a className="px-16 py-12 bg-black rounded-md text-white float-right" href="">Quote Now</a>
            </div>
            <img className='absolute w-800' src={nissanFailady} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}


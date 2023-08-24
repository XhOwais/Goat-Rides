import React, { useState } from 'react';
import carIcon from '../assets/icons/car.svg';
import infoIcon from '../assets/icons/info.svg';
import buyIcon from '../assets/icons/dollar.svg';
import ModelViewer from "./ModelViewer";

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
  year: 1989,
  mileage: '27,000 km',
  fuel: 'Petrol',
  transmission: 'Automatic',
  make: 'Nissan',
  model: 'Fairlady 300ZX',
  variant: '(Z32) 1989',
  price: 7000,
};

export default function Main() {
  const [activeSection, setActiveSection] = useState('Model');

  const handleHeaderItemClick = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Model':
        return <Model />;
      case 'Info':
        return <About />;
      case 'Buy':
        return <Buy />;
      default:
        return null;
    }
  };

  const handleLinkClick = (event, section) => {
    event.preventDefault();
    handleHeaderItemClick(section);
  };

  return (
    <>
      <div className=' h-screen relative overflow-x-hidden '>
        <div className='absolute top-0'>
          <Navbar />
        </div>
        <div className="main-container w-full h-full flex flex-col justify-between  relative mt-96">
        <div className=' flex w-full justify-between px-60'>
          <div >
            <h2 className=' text-42 font-bold'>{carInfo.make} {carInfo.model}</h2>
            <h6 className=' text-22'>{carInfo.variant}</h6>
          </div>
          <div>
            <h2 className=' font-bold text-42'><span className=' text-16'>$</span>{carInfo.price}</h2>
          </div>
        </div>
        <div className=' flex justify-between px-60'>
        <ul className=" flex flex-col gap-4">
            {infoList.map((item, index) => (
              <a
                className='flex h-auto items-center'
                key={index}
                href=""
                onClick={(e) => handleLinkClick(e, item.heading)}
              >
                <li className="py-12 px-12 mr-6 rounded-full bg-slate-100 text-white flex justify-center items-center">
                  <img className='w-24' src={item.icon} alt="" />
                </li>
                {item.heading}
              </a>
            ))}
          </ul>
          <ModelViewer />
          <ul className=" flex flex-col gap-4">
            {infoList.map((item, index) => (
              <a
                className='flex h-auto items-center'
                key={index}
                href=""
                onClick={(e) => handleLinkClick(e, item.heading)}
              >
                <li className="py-12 px-12 mr-6 rounded-full bg-slate-100 text-white flex justify-center items-center">
                  <img className='w-24' src={item.icon} alt="" />
                </li>
                {item.heading}
              </a>
            ))}
          </ul>
          
        </div>
        <div className=' flex justify-between px-60'>
            <div className=' w-400 h-250 bg-slate-200 rounded-lg'></div>
            <div className=' w-400 h-250 bg-slate-200 rounded-lg'></div>
            <div className=' w-400 h-250 bg-slate-200 rounded-lg'></div>
          </div>
          {/* {renderSection()} */}
        </div>
      </div>
    </>
  );
}

const Model = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-120 mx-240">
        <div className="">
          {/* <h3 className="text-42 font-medium -mb-32">{carInfo.make}</h3> */}
          {/* <h3 className=' w-full flex justify-center text-32'>meet you a car</h3>
          <h1 className="text-96 font-bold -mb-24">{carInfo.make} {carInfo.model}</h1> */}
          {/* <h3 className=' text-32 font-medium float-right'>{carInfo.variant}</h3> */}
        </div>
        {/* <img className='w-auto' src={nissanFairlady} alt="" /> */}
        {/* <div className='h-128 w-full mx-220  rounded-xl  flex items-center justify-between px-96 text-32'>
          <p className=' h-full w-auto flex items-center '>{carInfo.year}</p>
          <p className=' h-full w-auto flex items-center '>{carInfo.mileage}</p>
          <p className=' h-full w-auto flex items-center '>{carInfo.fuel}</p>
          <p className=' h-full w-auto flex items-center '>{carInfo.transmission}</p>
        </div> */}
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <h1 className='mt-200'>About</h1>
    </>
  );
};

const Buy = () => {
  return (
    <>
      <h1 className='mt-200'>Buy</h1>
    </>
  );
};

import React, { useState } from 'react';
import carIcon from '../assets/icons/car.svg';
import infoIcon from '../assets/icons/info.svg';
import buyIcon from '../assets/icons/dollar.svg';
import ModelViewer from "./ModelViewer";

import Navbar from './navbar';

const infoList = [
  {
    icon: carIcon,
  },
  {
    icon: infoIcon,
  },
  {
    icon: buyIcon,
  },
];

const carInfo = {
  year: 1989,
  mileage: '27,000 km',
  fuel: 'Petrol',
  transmission: 'Automatic',
  make: 'Nissan',
  model: 'Fairlady',
  variant: '300ZX',
  price: 7000,
};

const vehicleSpecifications = [
  {
    category: "topSpeed",
    values: [
      { value: "169 MPH" },
    ],
    valuesInSI: [
      { value: "272 KM/H" }]
  },
  {
    category: "power",
    values: [
      { value: "162 HP" }
    ],
    valuesInSI: [
      { value: "9,250 RPM" }]
  },
  {
    category: "torque",
    values: [
      { value: "130.5 N.M" },
    ],
    valuesInSI: [
      { value: "96.3 LBF.FT" }
    ],
  },
  {
    category: "fuelCapacity",
    values: [
      { value: "17 L" },
    ],
    valuesInSI: [
      { value: "3.7 IMP CAL" }
    ],
  }
];


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
      <div className=' h-screen w-full flex flex-col relative px-60 '>
        <div className=''>
          <Navbar />  
        </div>
        <div className=' flex items-center order-2 absolute bottom-4 '>
            <ul className=" relative z-50">
              {infoList.map((item, index) => (
                <a
                  className='flex h-auto items-center mb-24'
                  key={index}
                  href=""
                  onClick={(e) => handleLinkClick(e, item.heading)}
                >
                  <li className="py-12 px-12 mr-6 rounded-full bg-slate-100 text-white flex justify-center items-center">
                    <img className='w-24' src={item.icon} alt="" />
                  </li>
                </a>
              ))}
            </ul>
            <div className=' h-96 w-auto flex  justify-between'>
              {vehicleSpecifications.map(category => (
                <div className=' px-42' key={category.category}>
                  <h2 className=' font-heading text-16 '>{category.category}</h2>
                  <ul>
                    {category.values.map(value => (
                      <li className=' font-body font-bold text-32 text-hover -mt-12' key={value.unit}>
                        {value.value}
                      </li>
                    ))}
                    {category.valuesInSI.map(value => (
                      <li className=' font-body font-bold text-16 -mt-10' key={value.unit}>
                        {value.value}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        <div className="main-container flex flex-col items-center order-1">
          <div className=" w-847 translate-y-16">
            <h4 className=' font-sub text-64 -mb-36'>{carInfo.year}</h4>
            <h1 className=' font-heading text-64 '>{carInfo.make} {carInfo.model}</h1>
            <h4 className=' font-sub text-64 float-right -mt-36'>{carInfo.variant}</h4>
          </div>
          <div className=' w-full flex justify-center items-start relative'>
            <div className="">
              <h4 className=' text-299'>{carInfo.yaer}</h4>
            </div>
            <div className=' -translate-y-20'>
            <ModelViewer />
            </div>
            <div className=" w-500 h-500 bg-first rounded-full absolute -z-10"></div>
          </div>
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

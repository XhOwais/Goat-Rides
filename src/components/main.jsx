  import React, { useState } from 'react';
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
    makeModel: 'Fairlady 300ZX',
    varient: '(Z32) 1989',
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
        <div className='relative'>
          <div className='absolute top-0'>
            <Navbar />
          </div>
          <div className="main-container w-full h-screen flex justify-center items-center relative">
            <ul className="absolute left-4 flex flex-col gap-4">
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
            {renderSection()}
          </div>
        </div>
      </>
    );
  }

  const Model = () => {
    return (
      <>
        <div className="flex justify-center flex-col mt-120">
          <div className=" -translate-y-60">
            <h3 className="text-42 font-medium absolute">{carInfo.company}</h3>
            <h1 className="text-128 font-bold">{carInfo.makeModel}</h1>
            <h3 className=' text-32 font-medium float-right'>{carInfo.varient}</h3>
          </div>
          <img className=' absolute w-800 ' src={nissanFailady} alt="" />
        </div>
      </>
    );
  };

  const About = () => {
    return (
      <>
        <h1>About</h1>
      </>
    );
  };

  const Buy = () => {
    return (
      <>
        <h1>Buy</h1>
      </>
    );
  };

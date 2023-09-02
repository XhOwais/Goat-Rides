import React, { useState } from 'react';
import carIcon from '../assets/icons/car.svg';
import infoIcon from '../assets/icons/info.svg';
import buyIcon from '../assets/icons/dollar.svg';
import engineIcon from '../assets/icons/engine.svg'
import transmissionIcon from '../assets/icons/transmission.svg'
import speedIcon from '../assets/icons/speed.svg'
import ModelViewer from "./ModelViewer";
import car1 from '../../public/Cars/Featured-Cars/car1.png'
import car2 from '../../public/Cars/Featured-Cars/car2.png'
import car3 from '../../public/Cars/Featured-Cars/car3.png'

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
  transmission: 'manual',
  make: 'Nissan',
  model: 'Fairlady',
  variant: '300ZX',
  price: 7000,
  type: 'V6 engine',
  displacement: '3.0L VG30DE',
  speeds: '5-speed',
  acceleration: '0 to 60 mph in 7s'
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

const featuredCars = [{
  img: car1,
  link: "car-featured-car1"
},
{
  img: car2,
  link: "car-featured-car2"
},
{
  img: car3,
  link: "car-featured-car3"
},]


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
        <div className=' flex items-center  order-2 absolute bottom-0'>
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
          {/* <div className=' h-96 w-auto flex  justify-between ml-40'>
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
            </div> */}

        </div>
        <div className=' w-full flex justify-between items-center px-150'>
          <div className=' w-auto flex flex-col  justify-between'>
            {vehicleSpecifications.map(category => (
              <div className=' py-42' key={category.category}>
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
          <div className="main-container flex flex-col items-center justify-between ">
            <div>
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
          <div>
          <ul className=' flex'>
            <li className=' flex'>
              <span >
                <h4>Engine</h4>
                <p>{carInfo.displacement}</p>
              </span>
              <span>
                <h3>{carInfo.type}</h3>
              </span>
              <span >
                <img src={engineIcon} alt="" srcset="" />
              </span>
            </li>
            <li>
              <span>
                <h4>Transmission</h4>
                <span>
                <p>{carInfo.speeds}</p>
                <h3>{carInfo.transmission}</h3>
                </span>
              </span>
              <img src={transmissionIcon} alt="" srcset="" />
            </li>
            <li>
              <span>
                <img src={speedIcon} alt="" srcset="" />
                <p>{carInfo.acceleration}</p>
              </span>
            </li>
          </ul>
          
          </div>
          </div>
          {/* <div className=' w-200 order-4 absolute right-12 '>
           {featuredCars.map((item,index)=>(
            <a className=' w-200 h-150 ' href=''><img className=' overflow-hidden bg-white rounded-2xl' src={item.img} alt="" srcset="" /></a>
           ))}
          </div> */}
          <div className=' w-auto flex flex-col  justify-between'>
            {vehicleSpecifications.map(category => (
              <div className=' py-42' key={category.category}>
                <h2 className=' font-heading text-16 flex justify-end '>{category.category}</h2>
                <ul>
                  {category.values.map(value => (
                    <li className=' font-body font-bold text-32 text-hover flex justify-end -mt-12' key={value.unit}>
                      {value.value}
                    </li>
                  ))}
                  {category.valuesInSI.map(value => (
                    <li className=' font-body font-bold text-16 flex justify-end -mt-10' key={value.unit}>
                      {value.value}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}



export default function main() {
    const infoList =[{
          icon: '#',
          heading: 'Model'
    },
    {
        icon: '#',
        heading: 'About'
  },
  {
    icon: '#',
    heading: 'Buy'
},
]
const carInfo={
    company: 'Nissan'
}
    return(
        <>
        <div className="main-container ">
            <ul>
               {infoList.map((item, index)=>(
                <li><a href=""><img src={item.icon} alt="" srcset="" />{item.heading}</a></li>
               ))}
            </ul>
            <div className=" ">
            <div className="">
            <h3></h3>
            <h1></h1>
            <a href=""></a>
            </div>              
            </div>
        </div>
        </>
    )
}
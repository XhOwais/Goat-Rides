import Logo from '../assets/logo.png'
export default function Navbar() {

    return (
      <>
      <div className="navbar w-full h-24 flex justify-center  items-center">
      <ul>
        <li className=''><a href=""><img className=' w-16' src={Logo} alt="" srcset="" /></a></li>
      </ul>
      </div>
      </>
    )
  }
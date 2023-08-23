import Logo from '../assets/logo.png'
export default function Navbar() {

    return (
      <>
      <div className="navbar w-screen h-96 flex justify-center  items-center">
      <ul>
        <li className=''><a href=""><img className=' w-60' src={Logo} alt="" srcset="" /></a></li>
      </ul>
      </div>
      </>
    )
  }
import react from "react";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import logo from '../images/favicon.png'
import navimg from '../images/building.png'

const Navibar = () =>{
   
  return(
    
    <Navbar
  fluid={true}
  rounded={true}
  className=' sticky-top bg-opacity-0 '
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src={logo}
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
  
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button className=" bg-yellow-bee hover:bg-yellow-200 outline-none">
      <a className="text-black ">Enquire</a>
    </Button>
    <Navbar.Toggle />
  </div>
  
  <Navbar.Collapse >
    <Navbar.Link href="/navbars" className="hover:text-yellow-bee">
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="hover:text-yellow-bee">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="hover:text-yellow-bee">
      Projects
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="hover:text-yellow-bee">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>

)
}

export default Navibar;

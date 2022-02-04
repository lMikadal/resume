import NavMainAbout from './Navbar_main_about';
import NavMainContact from './Navbar_main_contact';


function NavMain() {
    return (
        <>
            <NavMainAbout/>  
            <div className="border-t border-solid border-blueGray-200"></div>
            <NavMainContact />
        </> 
    );
}

export default NavMain;
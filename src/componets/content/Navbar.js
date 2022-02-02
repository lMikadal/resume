import Me from '../img/me.jpg';
import NavItem from './Navbar_item';

//สร้าง item
const navItems = [ "About", "Educatioin", "Skills", "Career Objective", "Work Experience", "Projects" ];
const NavFooterItem = [
    {
        name: "github",
        img: "test", 
        link: "https://github.com/lMikadal/"
    }
];

function Navbar() {

    const navItem = navItems.map((item, index) => {
        return <NavItem key={index} item={item} />
    });

    return (
        <div className="bg-black opacity-80 text-white w-64 space-y-6 px-4 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <nav>
                <div className="py-4">
                    <img src={Me} className="rounded-lg opacity-100"/>
                </div>
                
                {navItem}

            </nav>
        </div>
    );
}

export default Navbar;
import Me from '../img/me.jpg';
import NavMainItem from './Navbar_main';
import NavFooterItem from './Navbar_footer';

function Navbar() {
    return (
        <div className="bg-black opacity-80 text-white w-64 space-y-6 px-4 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <nav>
                <div className="py-4">
                    <img src={Me} className="rounded-lg opacity-100"/>
                </div>
                
                <NavMainItem />

                <NavFooterItem />
            </nav>
        </div>
    );
}

export default Navbar;
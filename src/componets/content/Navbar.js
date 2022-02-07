import Me from '../img/me.jpg';
import NavMain from './Navbar_main';
import NavFooter from './Navbar_footer';

function Navbar() {
    return (
        <div className="bg-black opacity-80 text-white w-80 space-y-6 px-4 py-3 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <nav className="sticky top-0">
                <div className="py-2">
                    <img src={Me} alt="me" className="rounded-lg opacity-100"/>
                </div>
                
                <NavMain />

                <NavFooter />
            </nav>
        </div>
    );
}

export default Navbar;
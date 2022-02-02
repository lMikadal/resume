import NavItem from './Navbar_item';

//สร้าง item
const navItems = [ "About", "Educatioin", "Skills", "Career Objective", "Work Experience", "Projects" ];

function NavMain() {

    const navItem = navItems.map((item, index) => {
        return <NavItem key={index} item={item} />
    });

    return (
        <div>
            {navItem}
        </div>   
    );
}

export default NavMain;
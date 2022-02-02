import './Navbar';

function NavBarItem(props) {
    const { item } = props;

    return (
        <a href='#' className='block py-2.5 px-4 rounded-md font-bold hover:bg-slate-500'>
            {item}
        </a> 
    );
}

export default NavBarItem;
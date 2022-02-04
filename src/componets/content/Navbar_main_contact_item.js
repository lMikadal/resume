import './Navbar_main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

const items = [
    {
        id: 1,
        icon: faPhone,
        name: "061-6426419"
    },
    {
        id: 2,
        icon: faMailBulk,
        name: "mikada_p@silpakorn.edu"
    },
    {
        id: 3,
        icon: faHome,
        name: "สุขสวัสดิ์, กรุงเทพ"
    },
]

function NavContactItems() {

    const item = items.map((val)=>{
        return (
            <div className='block py-2.5'>
                <FontAwesomeIcon icon={val.icon} key={val.id}></FontAwesomeIcon>
                <span className='pl-3'>{val.name}</span>
            </div>   
        ) 
    })

    return (
        <>
            {item}
        </>
    );
}

export default NavContactItems;
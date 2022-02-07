import './Navbar_main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

function NavContactItems() {

    const items = [
        {
            icon: faPhone,
            name: "061-6426419"
        },
        {
            icon: faMailBulk,
            name: "mikada_p@silpakorn.edu"
        },
        {
            icon: faHome,
            name: "สุขสวัสดิ์, กรุงเทพ"
        },
    ]

    return (
        <>
            {items.map((val)=>{
                return (
                    <div className='block py-2.5' key={uuidv4()}>
                        <FontAwesomeIcon icon={val.icon}></FontAwesomeIcon>
                        <span className='pl-3'>{val.name}</span>
                    </div>   
                ) 
            })}
        </>
    );
}

export default NavContactItems;
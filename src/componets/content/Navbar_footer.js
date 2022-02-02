import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLine } from "@fortawesome/free-brands-svg-icons"

function NavFooter() {
    return (
        <div className="text-4xl flex justify-between px-8 absolute inset-x-0 bottom-3">
            <a href="https://github.com/lMikadal" target="_blank">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a> 
            <a href="https://www.facebook.com/panupong.mikada/" target="_blank">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>  
            </a> 
            <a>
                <FontAwesomeIcon icon={faLine}></FontAwesomeIcon>  
            </a>
        </div>
    );
}

export default NavFooter;
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLine } from "@fortawesome/free-brands-svg-icons";
import { v4 as uuidv4 } from 'uuid';
import Img from '../img/line.jpg';

function NavFooter() {
    const [showModal, setShowModal] = useState(false);
    const [showGit, setShowGit] = useState(false);
    const [showFacebook, setShowFacebook] = useState(false);

    function onClose(){
        setShowModal(false);
    }

    if (showGit === true){
        window.location.href = "https://github.com/lMikadal"
    }
    if (showFacebook === true){
        window.location.href = "https://www.facebook.com/panupong.mikada/"
    }

    return (
        <div className="text-4xl flex justify-between px-8"> 
            <button onClick={() => setShowGit(true)}>
                <FontAwesomeIcon icon={faGithub} key={uuidv4()}></FontAwesomeIcon>
            </button> 
            <button onClick={() => setShowFacebook(true)}>
                <FontAwesomeIcon icon={faFacebook} key={uuidv4()}></FontAwesomeIcon>  
            </button> 
            <button className="cursor-pointer" onClick={() => setShowModal(true)}>
                <FontAwesomeIcon icon={faLine} key={uuidv4()}></FontAwesomeIcon>  
            </button>

            {showModal? (
                <>
                    <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    onClick={() => onClose()}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                                    <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-7 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                    >
                                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-3 flex-auto">
                                    <img src={Img} alt="line" />
                                </div>
                                {/*footer*/}
                                <div className="text-black text-base flex p-3 border-t border-solid border-blueGray-200 rounded-b">
                                    <p><b>LineID:</b> 3012420000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                </> 
            ) : null}
        </div>
    );
}

export default NavFooter;
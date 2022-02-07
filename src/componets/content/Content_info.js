import ReactTypingEffect from 'react-typing-effect';
import MeInfo from '../img/meInfo.jpg';
import ContentInfoDescription from './Content_info_description';


function ContentInfo() {
    return (
        <div className='grid justify-items-center p-3'>
            <img src={MeInfo} alt="me" className='rounded-full drop-shadow-2xl w-80' />
            <div className='p-3 text-3xl'>
                <ReactTypingEffect text={["I'm Panupong Mikada", "I'm Developer"]} eraseDelay={500} typingDelay={200} />
            </div>
            
            <ContentInfoDescription/>
        </div>
    );
}

export default ContentInfo;
import ContentExperienceItem from "./Content_experience_item";
import { v4 as uuidv4 } from 'uuid';

function ContentExperience() {

    const items = [
        "การใช้งาน Version Control ใช้งาน Bitbucket, Sourcetree",
        "การใช้งาน Xampp ในการจำลอง Server",
        "การใช้งาน Navicat ในการจัดการฐานข้อมูล",
        "การใช้งาน Framework ใช้งาน CodeIgniter, Laravel",
        "การใช้งาน Library ใช้งาน Jquery, PHPExcel, mPDF",
        "การใช้งาน Postman"
    ]

    const expItem = items.map((item) => {
        return <ContentExperienceItem expitem={item} key={uuidv4()} />
    });

    return (
        <div className='bg-amber-400 opacity-80 rounded-lg grid justify-items-center p-3'>
            <h1 className='p-3 text-3xl'>Experience</h1>
            <div className='grid grid-rows-1 grid-flow-col gap-4'>
                <div className='col-span-1 px-2 border-r-4 border-r-black'>
                    <p>11/2021 ถึง 1/2022</p> 
                    <p>ได้มีโอกาสฝึกงานที่</p>
                    <p>บริษัท ฟอร์ท สมาร์ท เซอร์วิส จำกัด (มหาชน)</p>
                </div>
                <div className='col-span-1'>
                    <p className='text-xl'>ทักษะที่ได้รับ</p>
                    {expItem}
                </div>
            </div>
        </div>
    );
}

export default ContentExperience;
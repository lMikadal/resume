import { v4 as uuidv4 } from 'uuid';

function ContentSkillSoft() {
    const items = [
        "- สามารถสื่อสารภาษาอังกฤษได้",
        "- ขยันเรียนรู้",
        "- มีความกระตือรือร้นในการทำงาน",
        "- เข้ากับคนอื่นง่าย",
        "- ตรงต่อเวลา",
    ]

    const name = items.map((item)=>{
        return <p key={uuidv4()}>{item}</p>
    })

    return (
        <div className='md:bg-amber-400 md:opacity-80 rounded-lg p-3'>
            <h1 className='grid justify-items-center text-xl pb-2'>Soft Skill</h1>
            <hr/>
            <div className='p-2'>
                {name}
            </div>
        </div>
    );
}

export default ContentSkillSoft;
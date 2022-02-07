import ContentSkillHardItem from "./Content_skills_hard_item";
import { v4 as uuidv4 } from 'uuid';

function ContentSkillHard() {
    const items = [
        {
            title: "Version Control",
            description: {
                item1: "Git, Bitbucket",
                item2: ""
            }
        },
        {
            title: "Server",
            description: {
                item1: "Xampp, Node.js",
                item2: ""
            }
        },
        {
            title: "DataBase",
            description: {
                item1:"SQL Navicat,phpMyadmin", 
                item2: "NoSQL MongoDB"
            }
        },
        {
            title: "Framework, Library",
            description: {
                item1: "CodeIgniter, Laravel", 
                item2: "React, Node.js, Jquery"
            }
        },
        {
            title: "Programming Language",
            description: {
                item1: "HTML, CSS, JS ดี",
                item2: "PHP ดี"
            }
        }
    ]
    const skill = items.map((item)=>{
        return <ContentSkillHardItem title={item} key={uuidv4()} />
    })

    return (
        <div className='md:bg-amber-400 md:opacity-80 rounded-lg p-3'>
            <h1 className='grid justify-items-center text-xl pb-2'>Hard Skills</h1>
            <hr/>
            <div className='flex justify-between'>
                {skill}
            </div>
        </div>
    );
}

export default ContentSkillHard;
import ContentSkillHard from "./Content_skills_hard";
import ContentSkillSoft from "./Content_skills_soft";

function ContentSkills() {
    return (
        <div className='md:bg-white bg-amber-400 rounded-lg grid justify-items-center p-3'>
            <h1 className='p-3 text-3xl'>Skills</h1>
            <div className='md:grid grid-rows-1 grid-flow-col gap-4 pb-3 block w-full'>  
                <ContentSkillHard />
                <ContentSkillSoft />
            </div>
        </div>
    );
}

export default ContentSkills;
import ContentSkillHard from "./Content_skills_hard";
import ContentSkillSoft from "./Content_skills_soft";

function ContentSkills() {
    return (
        <div className='bg-white rounded-lg grid justify-items-center pt-3 pb-3'>
            <h1 className='p-3 text-3xl'>Skills</h1>
            <div className='md:grid grid-rows-1 grid-flow-col gap-4 pb-3 block w-full'>  
                <ContentSkillHard />
                <ContentSkillSoft />
            </div>
        </div>
    );
}

export default ContentSkills;
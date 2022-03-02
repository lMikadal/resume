import ContentInfo from "./Content_info";
import ContentEducation from "./Content_education";
import ContentExperience from "./Content_experience";
import ContentSkills from "./Content_skills";
import ContentHandwork from "./Content_handwork";
import ContentFooter from "./Content_footer";

function Content() {
    return (
        <div className="flex-1 p-3">
            <ContentInfo />
            <div className="md:grid grid-rows-1 grid-flow-col gap-4 pb-3 block">
                <ContentExperience />
                <ContentEducation />
            </div>
            <ContentSkills/>
            <ContentHandwork/>
            <ContentFooter/>
        </div>
    );
}

export default Content;
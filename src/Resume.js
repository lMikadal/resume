import Content from "./componets/content/Content";
import NavBar from "./componets/content/Navbar";

function Resume(){

    return (
        <div className="relative min-h-screen md:flex">         
            <NavBar /> 
            
            <Content />
        </div>
    );
}

export default Resume;
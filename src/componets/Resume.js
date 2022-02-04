import Content from "./content/Content";
import NavBar from "./content/Navbar";

function Resume(){

    return (
        <div className="relative min-h-screen md:flex">         
            <NavBar /> 
            
            <Content />
        </div>
    );
}

export default Resume;
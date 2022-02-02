import NavBar from "./content/Navbar";

function Resume(){

    return (
        <div className="relative min-h-screen md:flex">         
            <NavBar /> 
            <div className="flex-1 p-10">
                <h1>content</h1>
            </div>
        </div>
    );
}

export default Resume;
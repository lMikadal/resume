import NavContactItem from "./Navbar_main_contact_item";

function NavMainContact() {
    return (
        <>
            <div className="block px-2 py-3">
                <h1 className="text-xl">Contact <span className="text-amber-400">{"{"}</span></h1>
                <NavContactItem />
                <h1 className="text-xl text-amber-400">{"}"}</h1>
            </div>
        </> 
    );
}

export default NavMainContact;
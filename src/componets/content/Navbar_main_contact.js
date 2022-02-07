import NavContactItem from "./Navbar_main_contact_item";

function NavMainContact() {
    return (
        <>
            <div className="block px-2 py-3">
                <h1 className="text-xl">Contact {"{"}</h1>
                <NavContactItem />
                <h1 className="text-xl">{"}"}</h1>
            </div>
        </> 
    );
}

export default NavMainContact;
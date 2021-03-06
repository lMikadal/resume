import NavFooter from './Navbar_footer';
import NavContactItems from './Navbar_main_contact';

function ContentFooter() {
    return (
        <div className="border-t-2 grid grid-rows-1 grid-flow-col gap-2 md:px-16 py-10 md:hidden">
            <div>
                <NavContactItems/>
            </div>
            <div className="content-center">
                <NavFooter/>
            </div>

        </div>
    );
}

export default ContentFooter;
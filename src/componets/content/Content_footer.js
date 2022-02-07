import NavFooter from './Navbar_footer';
import NavContactItems from './Navbar_main_contact';

function ContentFooter() {
    return (
        <div className="border-t-2 grid grid-rows-1 grid-flow-col gap-4 px-16 md:hidden">
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
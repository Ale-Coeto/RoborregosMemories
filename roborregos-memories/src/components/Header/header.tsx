import { ReactNode } from "react";
import Filter from "../Filters/Filter";
import SearchBar from "../Filters/SearchBar";
import AuthShowcase from "../Nav/Auth";
import Avatar from "./Avatar";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import UploadButton from "./UploadButton";


const Header = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="fixed w-full pl-80">
                <DesktopHeader />
            </div>

            {children}
        </div>
    )
}

export default Header;
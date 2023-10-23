import AuthShowcase from "../Nav/Auth";
import Avatar from "./Avatar";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import UploadButton from "./UploadButton";


const Header = () => {
    return (
        <div className="w-full pt-6 pr-6">
            <div className="flex flex-row justify-between items-center">

                <div className="text-3xl font-bold flex">
                    <h1 className="text-zinc-800">
                        Roborregos
                    </h1>
                    <h1 className="text-blue-800 ml-3">
                        Memories
                    </h1>
                </div>
                <div className="flex gap-3 items-center">
                    <UploadButton />
                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default Header;
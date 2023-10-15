import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";


const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <DesktopHeader />
            <MobileHeader />
            <main className="h-full">
                {children}
            </main>
        </div>
    )
}

export default Header;
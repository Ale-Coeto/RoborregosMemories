import Header from "../Header/header";
import NavDesktop from "./NavDesktop";

const Nav = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavDesktop />
            <main className="h-full">
                <Header>
                    {children}
                </Header>
            </main>
        </div>
    )
}

export default Nav;
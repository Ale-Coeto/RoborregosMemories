import NavDesktop from "./NavDesktop";

const Nav = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavDesktop />
            <main className="h-full">
                {children}
            </main>
        </div>
    )
}

export default Nav;
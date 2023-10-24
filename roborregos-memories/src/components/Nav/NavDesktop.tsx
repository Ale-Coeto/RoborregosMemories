import AuthShowcase from "./Auth";
import DropItem from "./DropItem"

const NavDesktop = () => {
    const years = [
        { year: 2023, albums: ["TMR, Candidates, LARC"] },
        { year: 2022, albums: ["Candidates"] }
    ]

    return (
        <div className="fixed w-72 h-screen bg-neutral-100 py-10 pl-10">
            <div className="flex flex-col gap-4">
                {years.map((year, key) => (
                    <DropItem years={year} key ={key}/>
                ))}
            </div>
            <AuthShowcase />

        </div>
    )
}

export default NavDesktop;   
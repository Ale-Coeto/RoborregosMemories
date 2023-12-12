import Filter from "../Filters/Filter";
import SearchBar from "../Filters/SearchBar";

interface YearProps {
    id: number
}

const Year: React.FC<YearProps> = ({ id }) => {
    return (
        <>
            <div className="w-full pt-5 flex">
                <h1 className="text-xl font-bold text-neutral-700">Year</h1>
                
            </div>
        </>
    )
}

export default Year;
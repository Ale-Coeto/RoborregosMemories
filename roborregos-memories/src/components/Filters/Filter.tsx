import { IoMdArrowDropdown } from "react-icons/io";

interface FilterProps {
    label: string
}

const Filter:React.FC<FilterProps> = ({label}) => {
    return (
        <div className="ring-1 ring-neutral-400 rounded-md px-1 flex flex-row items-center gap-2 hover:bg-neutral-100">
            <div>
                {label}
            </div>
            <IoMdArrowDropdown />

        </div>
    )
}

export default Filter;
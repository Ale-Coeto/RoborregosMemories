import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';


interface DropItemProps {
    years: {
        year: number,
        albums: string[]
    }
}

const DropItem:React.FC<DropItemProps> = ({years}) => {
    return (
        <div>
            <div className='flex items-center gap-1'>
                <AiOutlineRight className='text-xs' />
                {/* <AiOutlineDown /> */}
                {years.year}
            </div>
        </div>
    )
}

export default DropItem;
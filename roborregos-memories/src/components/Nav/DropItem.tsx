import { useRouter } from 'next/navigation';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';


interface DropItemProps {
    years: {
        year: number,
        albums: string[]
    }
}

const DropItem:React.FC<DropItemProps> = ({years}) => {
    const Router = useRouter();
    const handleClick = () => {
        Router.push(`/year/${years.year}`)
    }
    return (
        <div>
            <div className='flex items-center gap-1'>
                <AiOutlineRight className='text-xs' />
                {/* <AiOutlineDown /> */}
                <button onClick={handleClick}>
                    {years.year}
                </button>
            </div>
        </div>
    )
}

export default DropItem;
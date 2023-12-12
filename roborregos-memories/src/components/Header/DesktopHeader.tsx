import Image from 'next/image';
import Avatar from './Avatar';
import UploadButton from './UploadButton';
import SearchBar from '../Filters/SearchBar';
import Filter from '../Filters/Filter';

const DesktopHeader = () => {
    return (
        <div className='w-full'>
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
            <div className="flex flex-row gap-2 items-center mt-8">
                <SearchBar />
                <Filter label="Date" />
                <Filter label="Tag" />
            </div>
        </div>
    )
}

export default DesktopHeader;
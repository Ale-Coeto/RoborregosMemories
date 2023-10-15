import Image from 'next/image';
import Avatar from './Avatar';
import UploadButton from './UploadButton';

const DesktopHeader = () => {
    return (
        <div className="w-full fixed bg-neutral-100 py-4 px-5 flex flex-row justify-between border-b border-neutral-300 z-50">
            <div className='flex items-center gap-3'>
                <Image src="/rbrgs_logo.png" alt="Roborregos Memories" width={30} height={10} />
                <h1 className='text-lg font-semibold'>
                    Roborregos Memories
                </h1>
            </div>
            <div className='flex gap-4 items-center'>
                <UploadButton />
                <Avatar />
            </div>
        </div>
    )
}

export default DesktopHeader;
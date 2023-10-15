import { BsUpload } from 'react-icons/bs';

const UploadButton = () => {
    const handleUpload = () => {
        console.log('Upload button clicked');
    }

    return (
        <button onClick={handleUpload} className='text-neutral-600 flex items-center gap-2 hover:bg-neutral-200 p-2 rounded-md'>
            <BsUpload />
            Upload
        </button>
    )
}

export default UploadButton;
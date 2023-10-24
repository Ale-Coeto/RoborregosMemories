import { uploadFile } from 'rbrgs-memories/server/api/supabase';
import { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { api } from 'rbrgs-memories/utils/api';

const UploadButton = () => {
    const { mutateAsync: uploadPhoto } = api.photos.uploadPhoto.useMutation();
    
    const [file, setFile] = useState('');
    const handleUpload = () => {
        console.log('Upload button clicked', file);
        //     uploadFile(file);
        if (file)
            uploadPhoto(file);

    }

    const handleChange = (e:any) => {

        if (!e.target.files) return;
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async () => {
            await setFile(reader.result as string);
        }

        
    }

    return (
        <div className='flex'>
            <input accept="image/*"
            className='file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100' type="file" id="myFile" name="filename" onChange={handleChange} />

            <button onClick={handleUpload} className='text-neutral-600 flex items-center gap-2 hover:bg-neutral-200 p-2 rounded-md'>
                <BsUpload />
                Upload

            </button>
        </div>
    )
}

export default UploadButton;
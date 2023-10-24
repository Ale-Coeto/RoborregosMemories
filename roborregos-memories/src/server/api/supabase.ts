import { createClient } from '@supabase/supabase-js'
import { env } from "../../env.mjs";

// Create Supabase client
const URL = env.PROJECT_URL;
const KEY = env.SUPABASE_KEY;
if (!URL || !KEY) throw new Error("Missing Supabase URL or Key")
const supabase = createClient(URL, KEY);

// Upload file using standard upload
export const uploadFile = async (file: string) => {
    const base64 = await fetch(file);
    const blob = await base64.blob();

    const { data, error } = await supabase.storage.from('Rbrgs_Memories').upload('/Private', blob)
    if (error) {
        // Handle error
        console.log(error);
    } else {
        // Handle success
        console.log(data);
    }
}

export const uploadProfilePicture = async ({
    file, // base64
    profileId,
    type,
  }: {
    file: string;
    profileId: string;
    type: string;
  }) => {
    const path = `public/${profileId}.${type}`;
    const base64 = await fetch(file);
    const blob = await base64.blob();
  
    return await supabase.storage.from("profile-pictures").upload(path, blob, {
      upsert: true,
    });
  };
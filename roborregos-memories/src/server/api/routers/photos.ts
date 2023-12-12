import { z } from "zod";
import { createClient } from '@supabase/supabase-js'
import { env } from "../../../env.mjs";

const URL = env.PROJECT_URL;
const KEY = env.SUPABASE_KEY;
if (!URL || !KEY) throw new Error("Missing Supabase URL or Key")

const supabase = createClient(URL, KEY);

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "rbrgs-memories/server/api/trpc";

export const photosRouter = createTRPCRouter({
    uploadPhoto: publicProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            console.log("recieved")
            const base64 = await fetch(input);
            const blob = await base64.blob();
            // console.log(blob)

            // const { error, data } = await supabase.storage.from('Rbrgs_Memories_Public').upload('/Test/dec', blob)
            // if (error) {
            //     // Handle error
            //     console.log(error);
            // } else {
            //     // Handle success
            //     console.log(data);
            // }
            // return {

            // };
        }),

});
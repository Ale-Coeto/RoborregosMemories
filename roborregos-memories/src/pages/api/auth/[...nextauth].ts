import NextAuth from "next-auth";

import { authOptions } from "rbrgs-memories/server/auth";

export default NextAuth(authOptions);

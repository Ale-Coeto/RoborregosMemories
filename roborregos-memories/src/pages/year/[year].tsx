import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBar from "rbrgs-memories/components/Filters/SearchBar";
import Header from "rbrgs-memories/components/Header/header";
import Body from "rbrgs-memories/components/Main/Body";
import Nav from "rbrgs-memories/components/Nav/Nav";

import { api } from "rbrgs-memories/utils/api";

const Year = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const router = useRouter();
  const { year } = router.query as { year: string };

  return (
    <>

      <Nav>
        <main className="w-full h-full pl-80">
          <div className="w-full">
            <Header />
          </div>

          <h1 className="text-xl font-bold text-neutral-700 mt-5">
            {year}
          </h1>

          <SearchBar />

        </main>
      </Nav>

    </>
  );
}

export default Year;


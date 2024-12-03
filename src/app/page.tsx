import { Header } from "@/components/Header";
import { Proposta } from "@/components/Proposta";
import { SiteSalas } from "@/components/SitesSalas";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
      {/* <hr className="w-full mt-28 border border-blue-500" /> */}
      <Proposta />

        <SiteSalas />
      </main>
    </>
  );
}

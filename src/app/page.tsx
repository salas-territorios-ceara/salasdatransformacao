import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Proposta } from "@/components/Proposta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
      {/* <hr className="w-full mt-28 border border-blue-500" /> */}
      <Proposta />
      {/* <Abrangencia /> */}
        {/* <SiteSalas /> */}
        <Footer />
      </main>
    </>
  );
}

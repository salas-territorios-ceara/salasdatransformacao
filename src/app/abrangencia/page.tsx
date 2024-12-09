import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Abrangencia() {
    return (
        <>
            <Header />
            <section className=" flex flex-col md:flex-col mx-6  lg:mx-16 mt-28 items-center">

                <h2 className="text-[#007b58] text-5xl font-bold text-center ">Abrangência</h2>

                <div className="h-[90%] w-[80%] mt-10">
                    <Image src='/assets/images/abrangencia.jpg' alt="" height={80} width={80} layout="responsive" />
                </div>

            </section>

            <Footer />
        </>
    );
}
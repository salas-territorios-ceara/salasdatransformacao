import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Conteudos() {
    return (
        <>
            <Header />
            <section className=" flex flex-col md:flex-col mx-6  lg:mx-16 mt-28 items-center justify-center">

                <h2 className="text-[#007b58] text-5xl font-bold text-center ">Conteúdos</h2>
                <h2 className="text-[#ad3e17] text-4xl font-semibold text-center mt-14 ">Nova Sala do Empreendedor</h2>
                {/* 
                <div className="h-[90%] w-[80%] mt-10">
                    <Image src='/assets/images/territorios_capa.png' alt="" height={80} width={80} layout="responsive" />
                </div> */}

                <div style={{ height: '70vh', width: '80vw' }} className="flex items-center justify-center mt-6">


                    <iframe
                        src="/assets/images/slide_territorio.pdf"
                        style={{
                            width: '80%',
                            height: '100%',
                            border: 'none', // Remove bordas
                        }}
                        allowFullScreen
                    ></iframe>
                </div>

            </section>

            <Footer />
        </>
    );
}

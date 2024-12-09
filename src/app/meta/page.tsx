import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Image from 'next/image'


export default function Meta() {
    return (
        <>

            <Header />

            <section className=" flex flex-col md:flex-row min-h-screen px-6  lg:mp-16 mt-2 8 bg-white bg-no-repeat bg-cover justify-start items-center gap-10">

                <div className="flex flex-col justify-center items-center w-[80%] ml-16">

                    <h2 className="text-[#007b58] text-4xl font-extrabold rounded-md">Meta</h2>
                    <p className="text-xl mt-4 text-black ">
                        Transformar o programa Territórios da Esperanças em case de superação a partir da interface assertiva do SEBRAE, capacitando e incentivando às  boas práticas nas diversas economias locais e nas Comunidade Empreendedora;  promovendo a  atuação do Programa Cidade Empreendedora,  através de seus eixos, com ênfase nas Salas do Empreendedor como ferramenta importante na dinamização dos  Arranjos Produtivos Locais.

                    </p>
                </div>
                <Image src="/assets/images/meta.png" width={20}
            height={20}
            layout="responsive"
            alt="Picture of the author" />



            </section>
            <hr className="w-full border border-[#ea5d1c]" />

            <Footer />
        </>
    )
}

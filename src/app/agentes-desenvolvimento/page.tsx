import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function AgentesDesenvolvimento() {
    return (
        <>
            <Header />
            <section className="flex flex-col md:flex-col mx-6 lg:mx-16 mt-28 items-center">
                <h2 className="text-[#54a532] text-4xl font-extrabold mt-2 mb-10 text-center">Agentes de Desenvolvimento</h2>
                <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
                    {[
                        { src: "/assets/images/ad_acopiara.jpeg", name: "Maria Ghyslayne Saldanha", location: "Acopiara" },
                        { src: "/assets/images/ad_catarina.jpeg", name: "Larice Pedrosa Tavares", location: "Catarina" },
                        { src: "/assets/images/ad_piquetcarneiro.jpeg", name: "Maria Elizangela Bessa Pinheiro Cavalcante", location: "Piquet Carneiro" },
                        { src: "/assets/images/ad_quixelo.jpeg", name: "Gesilene Josino", location: "Quixelô" },
                        { src: "/assets/images/ad_saboeiro.jpeg", name: "Admôr Cavalcante Neto", location: "Saboeiro" },
                        { src: "/assets/images/ad_salitre.jpeg", name: "Cicero Batista negreiros", location: "Salitre" },
                        { src: "/assets/images/ad_assare.jpeg", name: "Laysla de Sousa Roseno", location: "Assaré" },
                        { src: "/assets/images/ad_pedrabranca.jpeg", name: "Ana Júlia Vieira Cavalcantes", location: "Pedra Branca" },
                        { src: "/assets/images/ad_boa_viagem.jpeg", name: "Eliel Rafael da Silva Júnior", location: "Boa Viagem" },
                        { src: "/assets/images/ad_cedro.jpeg", name: "Alexsandro Pereira Da Silva", location: "Cedro" },
                        { src: "/assets/images/ad_cedro2.jpg", name: "Gabriel", location: "Cedro" },
                        { src: "/assets/images/ad_aiuaba.jpeg", name: "Taynara Alves Pereira da Silva", location: "Aiuaba" },
                        { src: "/assets/images/ad_quiterianopolis.jpeg", name: "Carolina Moura de Araújo", location: "Quiterianópolis" },
                        { src: "/assets/images/ad_senador_pompeu.jpeg", name: "Marisa Martins", location: "Senador Pompeu" },
                        { src: "/assets/images/ad_mombaca.jpeg", name: "Daiane Vieira da Silva", location: "Mombaça" },
                        { src: "/assets/images/ad_potengi.jpeg", name: "Antonia Soraya Soares da Silva", location: "Potengi" },
                        { src: "/assets/images/ad_tarrafas.jpg", name: "Eutália ferreira da Silva", location: "Tarrafas" },
                    ].map((card, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="h-[14em] w-[12rem] overflow-hidden">
                                <Image
                                    src={card.src}
                                    alt="ad"
                                    width={192}
                                    height={192}
                                    className="object-cover object-top h-full w-full"
                                />
                            </div>
                            <span className="font-bold text-lg text-center">{card.name}</span>
                            <p className="text-[#54a532] font-bold text-lg">{card.location}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

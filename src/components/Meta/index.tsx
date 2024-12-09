import Image from 'next/image'


export function Meta() {
  return (
    <>
      <section className=" flex flex-col md:flex-row h-[80vh] mx-6  lg:mx-16 mt-28 ">

        <div className="flex flex-col justify-center">

          <h2 className="text-[#007b58] text-4xl font-bold">Meta</h2>
          <p className="text-lg mt-2">
          Transformar o programa Territórios da Esperanças em case de superação a partir da interface assertiva do SEBRAE, capacitando e incentivando às  boas práticas nas diversas economias locais e nas Comunidade Empreendedora;  promovendo a  atuação do Programa Cidade Empreendedora,  através de seus eixos, com ênfase nas Salas do Empreendedor como ferramenta importante na dinamização dos  Arranjos Produtivos Locais.
          
          </p>
          {/* <hr className="w-full border border-blue-500" /> */}
        </div>

        <div className="w-[100%] lg:w-[50%]">
          
        </div>
        <Image src="/assets/images/image1.jpg" width={20}
            height={20}
            layout="responsive"
            alt="Picture of the author" />

      </section>
      <hr className="w-full border border-[#ea5d1c]" />
    </>
  )
}
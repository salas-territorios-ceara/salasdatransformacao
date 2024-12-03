import Image from 'next/image'


export function Proposta() {
  return (
    <>
      <section className=" flex flex-col md:flex-row h-[80vh] mx-6  lg:mx-16 mt-28 ">

        <div className="flex flex-col justify-center">

          <h2 className="text-[#007b58] text-4xl font-bold">Proposta</h2>
          <p className="text-lg mt-2">
            Criar uma plataforma digital multifuncional que integra produtores rurais, empreendedores e comunidades no Ceará. A solução combina Cadernos Técnicos, Marketing Territorial e suporte do SEBRAE para impulsionar o turismo, conectar setores econômicos e fomentar o empreendedorismo local, promovendo desenvolvimento sustentável e inclusão.</p>
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
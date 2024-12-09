import Image from 'next/image'


export function Proposta() {
  return (
    <>
      <section className=" flex flex-col md:flex-row min-h-screen px-6  lg:px-16 pt-28 bg-green-100" >

        <div className="flex flex-col justify-center">

          <h2 className="text-[#007b58] text-4xl font-bold">SOBRE</h2>
          <p className="text-lg mt-2">
          O programa Territórios da Esperança é uma proposta de intervenção territorial integrada por meio da ativação de um conjunto de atores para o desenvolvimento, a fim de transformar a realidade de municípios com expressivo potencial de crescimento no Estado do Ceará.            </p>
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
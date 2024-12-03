import Image from 'next/image'


export function SiteSalas() {
  return (
    <section className="mt-28 flex m-6 lg:m-16">
      <div className="flex flex-col justify-center">
        <h2 className="text-[#a8c712] text-4xl font-bold mt-20 lg:mt-0 text-center">Sites das Salas do Empreendedor</h2>
        <div className='mt-16'>

          <h3 className="text-3xl font-bold text-[#54a532] text-center">Acopiara</h3>
          <div className='flex flex-col lg:flex-row-reverse mt-6 gap-4'>
            <div className='w-[100%] md:w-[40%] flex flex-col justify-center items-center md:items-start text-center'>
              <p className="text-lg">
                A Sala do Empreendedor de Acopiara dispõe de um site exclusivo que centraliza diversos serviços voltados para apoiar empreendedores locais. Nele, os usuários podem acessar informações.
              </p>
              <button className='bg-green-600 px-20 py-2 rounded-lg text-white font-bold mt-2'>Acessa Site</button>
            </div>
            <div className='w-[100%] md:w-[40%]'>
              <Image
                height={20}
                width={20}
                layout="responsive"
                alt=''
                src="/assets/images/acopiara.png"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

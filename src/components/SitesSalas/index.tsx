import Image from 'next/image'


export function SiteSalas() {
  return (
    <section className="mt-28 flex m-6 lg:m-16">
      <div className="flex flex-col justify-center">
        <h2 className="text-[#a8c712] text-4xl font-bold mt-20 lg:mt-0 text-center">Sites das Salas do Empreendedor</h2>
        
        <div className='mt-16'>
          <h3 className="text-3xl font-bold text-[#54a532] text-center">Acopiara</h3>
          <div className='flex flex-col lg:flex-row-reverse mt-6 gap-4'>
            <div className='w-[100%] md:w-[40%] flex flex-col justify-center items-center md:items-centr text-center md:text-center'>
              <p className="text-lg">
                A Sala do Empreendedor de Acopiara dispõe de um site exclusivo que centraliza diversos serviços voltados para apoiar empreendedores locais. Nele, os usuários podem acessar informações.
              </p>
              <a target='_blank' className='bg-green-600 hover:bg-green-500 px-20 py-2 rounded-lg text-white font-bold mt-2' href="https://saladoempreendedoracopiara.vercel.app/">Acessa Site</a>
            </div>
            <div className='w-[100%] md:w-[60%] border border-blue-300'>
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

        <div className='mt-20'>
          <h3 className="text-3xl font-bold text-[#54a532] text-center">Catarina</h3>
          <div className='flex flex-col lg:flex-row mt-6 gap-4'>
            <div className='w-[100%] md:w-[40%] flex flex-col justify-center items-center md:items-centr text-center md:text-center'>
              <p className="text-lg">

              A Sala do Empreendedor de Catarina conta com um site exclusivo que reúne diversos serviços para apoiar os empreendedores locais.              </p>
              <a target='_blank' className='bg-green-600 hover:bg-green-500 px-20 py-2 rounded-lg text-white font-bold mt-2' href="https://saladoempreendedorcatarina.vercel.app/">Acessa Site</a>
            </div>
            <div className='w-[100%] md:w-[45%]'>
              <Image
                height={20}
                width={20}
                layout="responsive"
                alt=''
                src="/assets/images/catarina.png"
              />

            </div>
          </div>
        </div>

        <div className='mt-20 flex flex-col items-center'>
          <h3 className="text-3xl font-bold text-[#54a532] text-center">Piquet Carneiro</h3>
          <div className='flex flex-col lg:flex-row mt-6 gap-4 justify-center'>

            {/* <div className='w-[100%] md:w-[40%] flex flex-col justify-center items-center md:items-centr text-center md:text-center'>
              <p className="text-lg">

              A Sala do Empreendedor de Catarina conta com um site exclusivo que reúne diversos serviços para apoiar os empreendedores locais.              </p>
              <a className='bg-green-600 hover:bg-green-500 px-20 py-2 rounded-lg text-white font-bold mt-2' href="https://saladoempreendedorcatarina.vercel.app/">Acessa Site</a>
            </div> */}
            <div className='w-[100%] md:w-[30%] flex flex-col items-center'>
              <Image
                height={20}
                width={20}
                layout="responsive"
                alt=''className='mb-6'
                src="/assets/images/piquetcarneiro.png"
              />

              <a target='_blank' className=' bg-green-600 hover:bg-green-500 px-20 py-2.5 rounded-lg text-white font-bold mt-2' href="https://saladoempreendedorpiquetcarneiro.vercel.app/">Acessa Site</a>


            </div>

            <div className='w-[100%] md:w-[50%] border border-blue-300'>
              <Image
                height={20}
                width={20}
                layout="responsive"
                alt=''
                src="/assets/images/piquetcarneiro2.png"
              />

            </div>
          </div>
        </div>

        <div className='mt-20 flex flex-col items-center'>
          <h3 className="text-3xl font-bold text-[#54a532] text-center">Quixelô</h3>
          <div className='flex flex-col  mt-6 gap-4 justify-center lg:flex-row-reverse'>

            {/* <div className='w-[100%] md:w-[40%] flex flex-col justify-center items-center md:items-centr text-center md:text-center'>
              <p className="text-lg">

              A Sala do Empreendedor de Catarina conta com um site exclusivo que reúne diversos serviços para apoiar os empreendedores locais.              </p>
              <a className='bg-green-600 hover:bg-green-500 px-20 py-2 rounded-lg text-white font-bold mt-2' href="https://saladoempreendedorcatarina.vercel.app/">Acessa Site</a>
            </div> */}
            <div className='w-[100%] md:w-[30%] flex flex-col items-center'>
              <Image
                height={20}
                width={20}
                layout="responsive"
                alt=''className='mb-6'
                src="/assets/images/quixelo.png"
              />

              <a target='_blank' className=' bg-green-600 hover:bg-green-500 px-20 py-2.5 rounded-lg text-white font-bold mt-2' href="https://saladoempreendedorquixelo.vercel.app/">Acessa Site</a>


            </div>

            <div className='w-[100%] md:w-[50%] border border-blue-300'>
              <Image
                height={20}
                width={20}
                layout="responsive"
                alt=''
                src="/assets/images/quixelo2.png"
              />

            </div>
          </div>
        </div>



      </div>
    </section>
  );
}

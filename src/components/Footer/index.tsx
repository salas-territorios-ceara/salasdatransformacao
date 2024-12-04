import Image from 'next/image'

export function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#007b58] flex flex-col pt-8 pb-10 mt-20 lg:pb-20">
      <div className="flex justify-between pr-8 lg:pl-12 lg:pr-20">
      <div className="h-16 md:h-32 w-44 md:w-64">
          <Image
            src="/assets/images/logo-territorios-esperanca-white.png"
            width={20}
            height={20}
            layout="responsive"
            alt="Picture of the author"
          />  

          </div>
      </div>

      <div className="h-[1px] w-[90%] ml-8 bg-white mt-2 lg:ml-16 lg:w-[92%]"></div>

      <div className="pl-8 text-white text-lg mt-8 lg:flex lg:flex-row-reverse lg:justify-between lg:pl-16 lg:pr-20">
        <div className="mb-20 lg:mb-0 h-4 w-24 lg:w-28">
          <Image src="/assets/images/sebrae.png" alt="Logo Sebrae" layout="responsive" height={0} width={0}/>
        </div>
        <div className="text-lg">
          <p>©Territórios da Esperança {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}

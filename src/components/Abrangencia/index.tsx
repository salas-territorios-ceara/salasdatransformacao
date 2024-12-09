import Image from "next/image";

export function Abrangencia(){
    return(
      <section className=" flex flex-col md:flex-row mx-6  lg:mx-16 mt-28 ">

<h2 className="text-[#007b58] text-4xl font-bold">Abrangência</h2>

<div className="h-[90%] w-[80%]">
    <Image src='/assets/images/abrangencia.jpg'alt="" height={80} width={80} layout="responsive" />
</div>

        </section>
    );
}
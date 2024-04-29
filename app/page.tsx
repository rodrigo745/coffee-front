import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-24 text-white">
      <div className="w-screen fixed top-0 z-0">
        <Image src="/bg-cafe.jpg" alt="fondo de la web" width={1200} height={10} className="w-full"/>
      </div>
      <div className="z-10 w-full mt-10 lg:mt-20 xl:mt-30 2xl:mt-40 rounded-2xl bg-contenedor p-10">
        <div className="flex flex-col justify-center items-center text-center">

          <h1 className="text-3xl mt-10 font-medium">Our Collection</h1>
          <p className="mt-5 text-neutral-500 max-w-md">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        
          <div className="mt-8">
            <button className="mr-10 bg-slate-500 px-4 py-1 rounded-md">All Products</button>
            <button className=" hover:bg-slate-500 px-4 py-1 rounded-md transition">Available Now</button>

          </div>

        </div>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function Cards(props){

    const datos = props.datos;

    return(
        <div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {/* Aqui va el map */}
                {
                    datos.map((e, index) => (
                        <div key={index} className=" mx-8 h-fit mt-8 rounded-xl">
                            <div className="h-[40%] w-full">
                                <p className="absolute ml-3 mt-3 bg-yellow-200 text-black px-2 rounded-md">{ e.popular && "Popular" }</p>
                                <Image src={e.image} width={400} height={250} alt="imagen del cafe" className="w-full rounded-xl" />
                            </div>
                            <div className="flex justify-between mt-4">
                                <p className="font-medium">{e.name}</p>
                                <p className="px-2 py-1 rounded-md bg-green-800">{e.price}</p>
                            </div>
                            <div className="flex mt-2">
                                <Image src={ e.votes ? "/Star_fill.svg" : "/Star.svg" } width={20} height={20} alt="estrella" />
                                <p className="text-left mt-0.5 ml-2">{e.rating}</p>
                                <span className="text-neutral-500 ml-2 mt-0.5">
                                { e.votes == 0 ? "No ratings" : `(   ${e.votes} votes )` }
                                </span> 

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
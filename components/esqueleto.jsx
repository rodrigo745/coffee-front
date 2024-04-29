export default function Esqueleto() {
  const num = ["", "", ""];
  return (
    <div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {num.map((e, index) => (
          <div
            key={index}
            className="cursor-pointer hover:bg-neutral-900 mx-8 h-fit mt-8 p-4 rounded-xl w-52 md:w-80 animate-pulse"
          >
            <div className="h-[40%] w-full bg-neutral-800 rounded-md">
              <p className="absolute ml-3 mt-3 bg-yellow-200 text-black px-2 rounded-md"></p>
              <div className="w-32 h-28 md:h-40"></div>
            </div>
            <div className="flex justify-between mt-4">
              <p className="rounded-md w-40 h-5 bg-neutral-800"> </p>
              <span className="rounded-md w-14 h-5 bg-neutral-800"> </span>
            </div>
            <div className="flex mt-2 justify-between">
              <p className="rounded-md w-16 h-4 bg-neutral-800 mt-2"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Product } from "@/pages/Data/type";
import Image from "next/image";

export const Card = ({ console, img, lowestPrice, name }: Product) => {
  return (
    <div className="bg-white border-teal-600 border-2 rounded-md flex flex-col items-center h-auto w-full">
      <div className="p-5">
        <Image
          alt={name}
          src={img}
          style={{
            objectFit: "fill",
          }}
          width={200}
          height={120}
        />
      </div>
      <div className="w-full">
        <div
          className=" flex h-auto w-full p-2 flex-col gap-2"
          style={{
            backgroundColor: "#88CBCB",
          }}
        >
          <div className="flex justify-between w-full items-start">
            <span>{name}</span>
            <span>
              <Image
                src="/128/Nintendo 64.png"
                alt={console}
                width={40}
                height={40}
              />
            </span>
          </div>
          <div className="flex items-center justify-between">
            <button className="text-white font-semibold">Visit Sellers</button>
            <div className="text-lg">${lowestPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { SideBar } from "@/components/Sidebar";
import { RootObject } from "@/pages/Data/type";
import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import data from "./Data/data.json";
export default function Home({
  products,
}: {
  products: RootObject["products"];
}) {
  const { sections } = data as RootObject;
  return (
    <div className="flex pt-5 gap-5 ">
      <div>
        <SideBar fields={sections[0].fields} />
      </div>

      <div className="grid grid-cols-4 gap-5 overflow-y-scroll">
        {products.map((product, index) => {
          const { console, img, lowestPrice, name } = product;
          return (
            <div
              key={index}
              className="bg-white border-teal-600 border-2 rounded-md flex flex-col items-center h-auto w-full"
            >
              <div className="p-5">
                <Image
                  alt={name}
                  src={product.img}
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
                    <button className="bg-white rounded-md p-2">
                      Visit Sellers
                    </button>
                    <div className="text-lg">${lowestPrice}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
  query,
}) => {
  const instance = axios.create({
    baseURL: "http://localhost:3000/api",
  });
  let res;
  if (query.manufacturer !== undefined) {
    const { data } = await instance.get("/products", {
      params: {
        manufacturer: query.manufacturer,
      },
    });
    res = data;
  } else {
    const { data } = await instance.get("/products", {
      params: {
        manufacturer: "Nintendo",
      },
    });
    res = data;
  }

  return {
    props: {
      products: res,
    },
  };
};

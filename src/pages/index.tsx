import { SideBar } from "@/components/Sidebar";
import { RootObject } from "@/pages/Data/type";
import { Card } from "../components/Card";
import axios from "axios";
import { GetServerSideProps } from "next";
import data from "./Data/data.json";
import client from "@/lib/apolloClient";

export default function Home({
  products,
}: {
  products: RootObject["products"];
}) {
  const { sections } = data as RootObject;
  return (
    <div className="flex pt-5 gap-5 p-5 ">
      <div>
        <SideBar fields={sections[0].fields} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-y-scroll">
        {products.map((product, index) => {
          return <Card key={index} {...product} />;
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

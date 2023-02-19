import { SideBar } from "@/components/Sidebar";
import { Card } from "../components/Card";
import { GetServerSideProps } from "next";
import client from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import { Product, Section } from "@/__generated__/graphql";

export default function Home({
  products,

  sections,
}: {
  products: Product[];

  sections: Section[];
}) {
  return (
    <div className="flex pt-5 gap-5 p-5 ">
      <div>
        <SideBar sections={sections} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-y-scroll h-auto">
        {products &&
          products.map((product, index) => {
            return <Card key={index} {...product} />;
          })}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let sections;
  let products;
  const sectionResponse = await client.query({
    query: gql`
      {
        sections {
          id
          name
          fields {
            name
            type
          }
        }
      }
    `,
  });
  sections = sectionResponse.data.sections;
  if (query.manufacturer !== undefined) {
    const productResponse = await client.query({
      query: gql`
        {
          products(
            where: { manufacturer: { is: { name: { equals: "${query.manufacturer}" } } } }
          ) {
            name
            upc
            price
            image
            type
            userId
            console {
              id
              name
              manufacturerId
            }
          }
        }
      `,
    });
    products = productResponse.data.products;
  } else {
    products = [];
  }

  return {
    props: {
      products: products,
      sections: sections,
    },
  };
};

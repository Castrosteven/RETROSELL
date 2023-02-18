import Link from "next/link";
import { useQuery } from "@apollo/client";
import { gql } from "../../__generated__/gql";
export const Navbar = () => {
  const GET_MANUFACTURERS = gql(
    `query GetManufacturers {
        manufacturers {
          name
        }
      }
    `
  );
  const { loading, error, data } = useQuery(GET_MANUFACTURERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <header className="bg-teal-500 h-auto p-5 w-full flex flex-col gap-3 ">
      <div className="flex items-center jusitfy-between h-full max-w-7xl container mx-auto">
        <div className="w-1/4">
          <span className="text-2xl font-bold">Retro Sell</span>
        </div>
        <div className="flex w-full">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="w-full p-2 rounded-md bg-white"
          />
        </div>
        <div className="w-1/4 flex  ">
          <div className="flex w-full gap-10 text-center items-center justify-center">
            <div>Account</div>
            <div>Cart</div>
          </div>
        </div>
      </div>
      <nav className="items-center flex justify-center">
        <ul className="flex gap-5 items-center">
          {data &&
            data.manufacturers.map((manufacturer) => {
              return (
                <Link
                  key={manufacturer.name}
                  href={`?manufacturer=${manufacturer}`}
                >
                  <li>{manufacturer.name}</li>
                </Link>
              );
            })}
        </ul>
      </nav>
    </header>
  );
};

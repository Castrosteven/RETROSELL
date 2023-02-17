import Link from "next/link";
import { useEffect, useState } from "react";
export const Navbar = () => {
  const [manufacturers, setManufacturers] = useState<string[]>([]);
  const fetchManufacturers = async () => {
    const url = await fetch("http://localhost:3000/api/manufacturer");
    const data = await url.json();
    setManufacturers(data);
  };
  useEffect(() => {
    fetchManufacturers();
  }, []);
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
          {manufacturers.map((manufacturer) => {
            return (
              <Link key={manufacturer} href={`?manufacturer=${manufacturer}`}>
                <li>{manufacturer}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

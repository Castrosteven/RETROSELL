import { ReactNode } from "react";
import { Navbar } from "./Navbar";
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-7xl container mx-auto">{children}</main>
    </div>
  );
};

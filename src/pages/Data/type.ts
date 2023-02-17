export interface Heading {
  name: string;
  id: string;
}

export interface Option {
  name: string;
  id: string;
  type: string;
}

export interface Field {
  heading: Heading;
  options: Option[];
}

export interface Section {
  id: string;
  fields: Field[];
}

export interface Product {
  name: string;
  upc: string;
  manufacturer: string;
  console: string;
  vendors: number;
  lowestPrice: string;
  img: string;
}

export interface RootObject {
  sections: Section[];
  products: Product[];
  manufacturers: string[];
}

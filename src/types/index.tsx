import { MouseEventHandler } from "react";

// buton bileseninin aldıgı propların tipini tanımlama
export type ButtonProps = {
  title: string;
  designs?: string;
  disabled?: boolean;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler;
  rIcon?: string;
};

// Arabanın Bilgileri
export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "rwd" | "awd" | "4wd";
  fuel_type: "gas" | "diesel" | "elecricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type filterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel?: string;
  year?: string;
};

export type OptionType = {
  label: string;
  value: string;
};

//! generic type acıklaması
// type TestType3<T> = {
//   name: string;
//   surname: string;
//   age: number;
//   exa1: T;
//   exa2: T;
// };

// const obje: TestType3<number> = {
//   exa1: 3230,
// };

// ! functıonlarda generic type

// function deneme<T, Z>(a: T, b: Z) {
//   console.log(a, b);
// }

// deneme<number, string>(30, 'selam');

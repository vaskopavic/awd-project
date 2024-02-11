import localfont from "next/font/local";
import { Raleway } from "next/font/google";

const brice = localfont({
  src: "../public/brice-bold.woff2",
  variable: "--font-brice",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const fonts = {
  brice,
  raleway,
};

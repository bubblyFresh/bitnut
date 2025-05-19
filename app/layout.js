import { Nerko_One } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

 const nerko = Nerko_One({
  subsets: ["latin"],
  variable: "--font-nerko",
  weight: "400",

 })

export const metadata = {
  title: "Bitnut",
  description: "Nutty the albino squirrel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className={nerko.className}
      >
        <Provider>
          {children}
        </Provider>
        
      </body>
    </html>
  );
}

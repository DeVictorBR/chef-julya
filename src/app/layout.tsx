import type { Metadata } from "next";
import { Poppins, Dancing_Script, Raleway } from "next/font/google";
import "@/src/globals.css"

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing"
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway"
});

export const metadata: Metadata = {
  title: "Chef Julya | Confeitaria Artesanal",
  description: 
  "Confeitaria artesanal da Chef Julya. Bolos e doces feitos com carinho e dedicação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
      className={`
        ${poppins.variable}
        ${dancing.variable}
        ${raleway.variable}
        bg-background text-foreground
        `}
      >
        {children}
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  );
}

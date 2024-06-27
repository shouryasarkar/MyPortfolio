import "./globals.css";
import Head from "next/head";


export const metadata = {
  title: "My Portfolio",
  description: "My Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/jpg" href="public/images/hero_img.png"/>
      </Head>
      <body>{children}</body>
    </html>
  );
}

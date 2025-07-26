import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Menu.module.css";
import Head from "next/head";
import { Newsreader, Lobster_Two } from "next/font/google";
import MenuComponents from "../components/MenuComponents/MenuComponents";
const inter = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const interItalic = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu – Cafe du Port | French Café & Bakery in Halifax</title>
        <meta
          name="description"
          content="Explore the full menu at Cafe du Port in Halifax, offering authentic French pastries, custom cakes, specialty coffee, and all-day breakfast. Visit us at 1597 Barrington St."
        />
        <meta
          name="keywords"
          content="Cafe Menu Halifax, French Bakery Menu, Cafe du Port Menu, Custom Cakes Halifax, French Pastries, Breakfast Cafe Halifax, Coffee Shop Halifax"
        />
        <meta property="og:title" content="Menu – Cafe du Port" />
        <meta
          property="og:description"
          content="Browse the menu at Cafe du Port on Barrington Street in Halifax. Enjoy fresh French pastries, artisan coffee, and custom-made cakes served daily."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.xn--cafduport-d4a.com/Menu"
        />
      </Head>
      <main className={inter.className}>
        <div style={{ minHeight: "100px" }}>
          <Header type={"normal"} />
        </div>
        <div className={styles.mainBodyDiv}>
          <h1 className={styles.customCakeHeaderText}>
            <i className={interItalic.className}>Menu</i>
          </h1>
          <MenuComponents />
        </div>
        <Footer />
      </main>
    </>
  );
}

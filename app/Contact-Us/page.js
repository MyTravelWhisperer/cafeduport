import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./ContactUs.module.css";
import Button from "../components/Button/Button";
import Head from "next/head";
import { Newsreader, Lobster_Two } from "next/font/google";
const inter = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const interItalic = Lobster_Two({
  weight: ["400", "700"],
});

export default function Shop() {
  return (
    <>
      <Head>
        <title>Contact Us – Cafe du Port | French Café in Halifax</title>
        <meta
          name="description"
          content="Contact Cafe du Port in Halifax for custom cakes, French pastries, or general inquiries. Open daily 7:00 AM – 11:00 PM at 1597 Barrington St. Call +1 (902) 425-7956."
        />
        <meta
          name="keywords"
          content="Contact Cafe, French Bakery Halifax, Custom Cakes, Cafe du Port, 1597 Barrington Street, Halifax Cafe, Call Cafe du Port"
        />
        <meta property="og:title" content="Contact Us – Cafe du Port" />
        <meta
          property="og:description"
          content="Visit Cafe du Port at 1597 Barrington St, Halifax. Open 7:00 AM – 11:00 PM. Call +1 (902) 425-7956 for custom cake orders or pastry inquiries."
        />
      </Head>
      <main className={inter.className}>
        <div style={{ minHeight: "100px" }}>
          <Header type={"normal"} />
        </div>
        <div className={styles.mainBodyDiv}>
          <h1 className={styles.customCakeHeaderText}>
            <i className={interItalic.className}>Contact Us </i>
          </h1>
          <div className={styles.mapContactUsDiv}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.5974729850695!2d-63.575942723770346!3d44.64614337107229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a231cad57aaed%3A0x1e67c5314c640f42!2sCaf%C3%A9%20du%20Port!5e0!3m2!1sen!2sca!4v1752113300119!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h1 className={styles.headerText}>Address</h1>
            <a className={styles.bodyText} href="https://g.co/kgs/wAzimNm">
              1597 Barrington St, Halifax, Nova Scotia
            </a>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h1 className={styles.headerText}>Call Us</h1>
            <a className={styles.bodyText} href="tel:+19024257956">
              +1 (902) 425-7956
            </a>
          </div>
          <div style={{ marginBottom: "60px" }}>
            <h1 className={styles.headerText}>Email</h1>
            <a
              className={styles.bodyText}
              href="mailto:cafeduportsocials@gmail.com"
            >
              cafeduportsocial@gmail.com
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

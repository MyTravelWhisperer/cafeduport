import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./ReserveTable.module.css";
import { Newsreader } from "next/font/google";
import Button from "../components/Button/Button";
import Head from "next/head";

const interNews = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
import { Lobster_Two } from "next/font/google";
const inter = Lobster_Two({
  subsets: ["latin"],

  weight: ["400", "700"],
});
export default function ReserveTable() {
  return (
    <>
      <Head>
        <title>Reserve a Table – Cafe du Port | French Café in Halifax</title>
        <meta
          name="description"
          content="Reserve your table at Cafe du Port, Halifax’s cozy French café. Enjoy artisan pastries and espresso in a warm, inviting atmosphere."
        />
        <meta
          name="keywords"
          content="Reserve Table Halifax, French Cafe Reservation, Cafe du Port, Halifax Dining, French Bakery Seating"
        />
        <meta property="og:title" content="Reserve a Table – Cafe du Port" />
        <meta
          property="og:description"
          content="Book your table at Cafe du Port, Halifax. Experience authentic French pastries and a cozy atmosphere. Open daily 7:00 AM – 11:00 PM."
        />
      </Head>
      <main className={interNews.className}>
        <div style={{ minHeight: "100px" }}>
          <Header type={"normal"} />
        </div>
        <div className={styles.mainBodyDiv}>
          <div className={styles.bookingTableHeaderDiv}>
            <h1 className={styles.bookingTableHeaderText}>
              <i className={inter.className}>Reserve a Table</i>
            </h1>
            <div className={styles.mainReservationTop}>
              <div className={styles.reservationImageDiv}>
                <img
                  src={"/table.png"}
                  alt="Table Image"
                  className={styles.tablePic}
                />
              </div>
              <div className={styles.reservationButtonDiv}>
                <div className={styles.reservationButtonSecondDiv}>
                  <p className={styles.bookingTableParagraphText}>
                    We’re open daily from 7:00 AM to 11:00 PM, all year
                    round—including public holidays, except in exceptional
                    circumstances. To make a booking, please click the button
                    below to book via Square.
                  </p>
                  <div className={styles.bookingTableMainDivButton}>
                    <div className={styles.bookingTableButton}>
                      <Button
                        link={
                          "https://app.squareup.com/appointments/buyer/widget/51n2g9xr5gpoko/LEHF9SSCKYKQJ"
                        }
                        text={"Find Table"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

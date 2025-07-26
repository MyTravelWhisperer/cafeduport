import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Franchising.module.css";
import Head from "next/head";
import Button from "../components/Button/Button";
import { Newsreader, Lobster_Two } from "next/font/google";
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
        <title>
          Franchise with Café du Port – Affordable Opportunities Across Atlantic
          Canada
        </title>
        <meta
          name="description"
          content="Join one of the most affordable Canadian franchising chains. Café du Port is expanding across Atlantic Canada, including Moncton, Cape Breton, PEI, and more. Be part of a French café experience rooted in quality and community."
        />
        <meta
          name="keywords"
          content="Café Franchise Atlantic Canada, Moncton Franchise, PEI Franchise, Cape Breton Franchise, Café du Port Franchise, Affordable Franchise Canada, Canadian Coffee Franchise, French Bakery Franchise"
        />
        <meta
          property="og:title"
          content="Franchise with Café du Port – Grow With Us in Atlantic Canada"
        />
        <meta
          property="og:description"
          content="Looking to open a franchise in Moncton, Cape Breton, or PEI? Join Café du Port – an affordable and growing Canadian café chain. Now expanding across Atlantic cities."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.xn--cafduport-d4a.com/Franchising"
        />
      </Head>
      <main className={inter.className}>
        <div style={{ minHeight: "100px" }}>
          <Header type={"normal"} />
        </div>
        <div className={styles.mainBodyDiv}>
          <h1 className={styles.customCakeHeaderText}>
            <i className={interItalic.className}>Franchising</i>
          </h1>

          <p className={styles.subSloganText}>
            <i className={interItalic.className}>
              Bring a little france to your city
            </i>
          </p>
          <div
            style={{
              width: "200px",
              height: "50px",
              borderRadius: "50px",
              overflow: "hidden",
              marginTop: "20px",
            }}
          >
            <Button
              link={"https://form.jotform.com/252059137324252"}
              text={"Apply today"}
            />
          </div>
          <div className={styles.firstSection}>
            <div className={styles.firstSectionSub}>
              <VideoSection />
            </div>
            <div className={styles.firstSectionSecondSub}>
              <h1
                style={{ marginTop: "-2px" }}
                className={styles.customHeaderText}
              >
                <i className={interItalic.className}>Concept Overview</i>
              </h1>
              <p className={styles.subSectionText}>
                &nbsp; &nbsp; &nbsp; &nbsp; Café du Port brings the charm of a
                French café to Canada, serving fresh, handmade pastries and
                high-quality coffee every single day. Our commitment to
                freshness, elegance, and friendly service sets us apart,
                creating a warm and inviting atmosphere where every visit feels
                special. From flaky croissants to rich, smooth lattes,
                everything is prepared with care and passion. <br />
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; As we expand across the country,
                we’re looking for like-minded partners to grow with us. If
                you’re passionate about great food, meaningful customer
                experiences, and building a community around quality and
                hospitality, joining the Café du Port family could be the
                perfect opportunity. Let’s bring a taste of France to more
                neighborhoods—together.
              </p>
            </div>
          </div>

          <div className={styles.secondSection}>
            <div className={styles.secondCoverSection}>
              <div className={styles.secondFirstSubSection}>
                <h1
                  style={{ color: "rgb(242, 236, 231)" }}
                  className={styles.customHeaderText}
                >
                  <i className={interItalic.className}>Why us?</i>
                </h1>
                <p
                  style={{ color: "rgb(242, 236, 231)", lineHeight: "25px" }}
                  className={styles.subSectionText}
                >
                  &nbsp; &nbsp; &nbsp; &nbsp; At Café du Port, we understand the
                  challenges of starting a new business — because we’ve been in
                  your shoes. As a locally owned and{" "}
                  <b>proudly Canadian brand</b>, we know what real support looks
                  like. That’s why we offer more than just a name — we provide
                  hands-on training, operational guidance, and ongoing support
                  to help make your journey into business ownership as smooth as
                  possible. Our franchise plans are flexible and built around
                  your individual goals, ensuring you’re set up for success
                  right from the start. <br />
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; We believe in keeping things
                  affordable and accessible. With an initial franchise fee
                  starting at just{" "}
                  <b>CAD $10,000, a low 5% royalty, and 1% marketing fee</b>,
                  we’re one of the most cost-effective options in the market. To
                  further reduce your upfront costs, we offer equipment leasing
                  options that allow you to get started with less financial
                  pressure. When you join Café du Port, you’re not just opening
                  a café — you’re becoming part of a community-driven, Canadian
                  brand built on French charm, daily freshness, and a commitment
                  to quality.
                </p>
              </div>
              <div className={styles.second2ndSubSection}>
                <img
                  src={`/coffeecros.jpeg`}
                  alt="Logo"
                  className={styles.secondImage}
                />
              </div>
            </div>
          </div>

          <div className={styles.firstConnectSectionSecondSub}>
            <h1
              style={{ marginTop: "-2px", textAlign: "center" }}
              className={styles.customHeaderText}
            >
              <i className={interItalic.className}>Want to learn more?</i>
            </h1>
            <p
              style={{ marginTop: "-13px", textAlign: "center" }}
              className={styles.subSectionText}
            >
              Let’s share a moment — the Café du Port way. <br />
              Warm coffee, open hearts, and a touch of French charm.
            </p>
            <div
              style={{
                width: "200px",
                height: "50px",
                borderRadius: "50px",
                overflow: "hidden",
                marginTop: "20px",
              }}
            >
              <Button
                link={"https://form.jotform.com/252059137324252"}
                text={"Let's chat"}
              />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

const VideoSection = () => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/XkYHo87HQHk?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=XkYHo87HQHk"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          zIndex: -1,
          objectFit: "cover",
        }}
      ></iframe>
    </div>
  );
};

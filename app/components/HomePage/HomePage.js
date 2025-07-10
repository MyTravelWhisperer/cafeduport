"use client";
import styles from "./HomePage.module.css";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const LIST_OF_THINGS = [
  {
    title: "Looking for a table?",
    body: "Hosting a birthday, brunch, or casual get-together? Reserve a cozy spot for up to 20 guests and let us take care of the rest.",
    button: "Book your table",
    image: "/table.png",
    link: "/ReserveTable",
  },
  {
    title: "Looking for catering?",
    body: "From intimate dinners to large celebrations, our catering brings flavor and charm to every occasion.",
    button: "Book us for catering",
    image: "/catering.JPG",
  },
  {
    title: "Looking for a custom cake?",
    body: "Whether it’s for five friends or five hundred guests, we’ll design the perfect cake to match your moment. ",
    button: "Book your cake with us",
    image: "/cakedecorating.jpg",
    link: "/Custom-Cake",
  },
];
const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  useEffect(() => {
    console.log((windowWidth - 40) / 2);
  }, [windowWidth]);

  return (
    <div className={styles.mainHomePageDiv}>
      <Header />
      <div className={styles.mainDivContainer}>
        <div className={styles.leftsideMainDiv}>
          <div className={styles.leftSideVideoContainer}>
            <video
              id="mutedvideo"
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              className={styles.videoMainContainer}
            >
              <source
                src="https://lesdeuxmagots.fr/wp-content/uploads/2023/10/328_DEUXMAGOTS_CHOCOLAT_V2.mp4"
                type="video/mp4"
              />
            </video>
            <div className={styles.sloganTextMainDiv}>
              <h1 className={styles.sloganTextMain}>France</h1>
              <h1
                className={styles.sloganTextMain}
                style={{ marginLeft: "100px" }}
              >
                {" "}
                Meets{" "}
              </h1>
              <h1 className={styles.sloganTextMain}> Halifax</h1>
              <p className={styles.subSloganText}>
                <i>
                  Authentic French taste <br /> with East Coast soul.
                </i>
              </p>
            </div>
          </div>
          <div className={styles.secondSectionLeftSide}>
            <div className={styles.secondSectionLeftMainContSide}>
              <div className={styles.mainImageContainer}>
                <img
                  src="/zeller.png"
                  alt="Logo"
                  width={windowWidth / 2}
                  height={(windowWidth / 2) * 0.7}
                />
                <img
                  src="/discoverycentre.png"
                  alt="Logo"
                  width={windowWidth / 2}
                  height={(windowWidth / 2) * 0.7}
                />
              </div>
              <div className={styles.historyImageDescriptionContainer}>
                <div className={styles.historyImageDescriptionSecondContainer}>
                  <h1 className={styles.historyImageDescrptionTextTitle}>
                    Long history <br />
                    of the location......
                    {windowWidth > 1300 && <br />}
                    <br />
                  </h1>
                  <p className={styles.historyImageDescrptionTextBody}>
                    Café du Port is proudly nestled at the iconic intersection
                    of Barrington and Sackville Street — a crossroads steeped in
                    Halifax&apos;s urban history. This location has long been a
                    witness to the city&apos;s evolving character, from the
                    bustling days of the Zellers shopping complex to its
                    transformation into the beloved Discovery Centre. With each
                    chapter, the area has remained a central part of
                    Halifax&apos;s downtown heartbeat. Amidst all the change,
                    one thing has endured: the building&apos;s historic charm.
                    Its original sandstone exterior, carefully preserved through
                    time, is not only a striking architectural feature but also
                    a silent storyteller of the past.{" "}
                    {windowWidth > 1300 && <br />}
                    <br />
                    <br />
                    These timeworn stones embody the spirit of the city —
                    resilient, rooted, and rich with heritage. At Café du Port,
                    we are honored to continue that story by creating a space
                    where history is not only seen but felt. It&apos;s where
                    French café culture meets East Coast warmth, and where the
                    past inspires the present. Whether you&apos;re sipping
                    coffee by the window or gathering with friends, you&apos;ll
                    find that our café is more than a place — it&apos;s a living
                    tribute to Halifax&apos;s vibrant journey through time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSideMainDiv}>
          <div className={styles.rightSideMaiImageContainerDiv}>
            <div className={styles.rightSideSecondImageContainerDiv}>
              <Image
                x="0"
                y="0"
                src="/logoIcon.png"
                alt="Logo"
                width={windowWidth > 1300 ? 460 : windowWidth > 850 ? 300 : 190}
                height={
                  windowWidth > 1300 ? 420 : windowWidth > 850 ? 280 : 160
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainThirdDivContainer}>
        <div className={styles.mainThirdSecondDivContainer}>
          <h1 className={styles.headerInThirdDiv}>Planning a party/event ?</h1>
          <p className={styles.bodyInThirdDiv}>
            We’re here to craft the magic with you.
          </p>
          <div className={styles.thirdSectionItemDiv}>
            {LIST_OF_THINGS.map((eachItem, index) => {
              return (
                <Link key={index} href={eachItem?.link || ""}>
                  <div className={styles.eachItemDiv}>
                    <img
                      src={eachItem.image}
                      alt="Logo"
                      className={styles.responsiveItemImage}
                    />
                    <h1 className={styles.headerInThirdEachItemDiv}>
                      {eachItem.title}
                    </h1>
                    <p className={styles.bodyInThirdEachItemDiv}>
                      {eachItem.body}
                    </p>
                    <div className={styles.buttonMainDivInThirdEachItemDiv}>
                      <h1 className={styles.buttonInThirdEachItemDiv}>
                        {eachItem.button}
                      </h1>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.mainFourthDivContainer}>
        <div className={styles.mainFourthSecondDivContainer}>
          <h1 className={styles.followUsOnText}>Follow Us On</h1>
          <div className={styles.followUsFbInstaDiv}>
            <FaFacebook
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(
                  " https://www.facebook.com/profile.php?id=61575948664422",
                  "_blank"
                );
              }}
              size={windowWidth > 500 ? 45 : 35}
              color={"#004236"}
            />
            <FaInstagram
              onClick={() => {
                window.open(
                  "https://www.instagram.com/cafeduporthfx/?hl=en",
                  "_blank"
                );
              }}
              style={{ cursor: "pointer" }}
              size={windowWidth > 500 ? 45 : 35}
              color={"#004236"}
            />
          </div>
          <p
            onClick={() => {
              window.open(
                "https://www.instagram.com/cafeduporthfx/?hl=en",
                "_blank"
              );
            }}
            className={styles.instacafeduport}
          >
            @cafeduporthfx
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

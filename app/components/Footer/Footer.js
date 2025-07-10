"use client";
import styles from "./Footer.module.css";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
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

  return (
    <footer className={styles.footerMainDiv}>
      <div className={styles.footerFirstMainDiv}>
        <Image
          x="0"
          y="0"
          src="/footerlogo.png"
          alt="Logo"
          width={80}
          height={70}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.footerSecondMainDiv}>
        <div className={styles.footerSecondSecondMainDiv}>
          <div className={styles.leftSideSocial}>
            <FaFacebook
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(
                  " https://www.facebook.com/profile.php?id=61575948664422",
                  "_blank"
                );
              }}
              size={20}
              color={"rgb(242, 236, 231)"}
            />
            <FaInstagram
              onClick={() => {
                window.open(
                  "https://www.instagram.com/cafeduporthfx/?hl=en",
                  "_blank"
                );
              }}
              style={{ cursor: "pointer" }}
              size={20}
              color={"rgb(242, 236, 231)"}
            />
          </div>
          <p className={styles.capyRightLeft}>
            © copyright 2025 Le cafe du port canada inc.
          </p>
        </div>
        <div className={styles.marginBetweendiv}></div>
        <div className={styles.footerSecondSecondMainDiv}>
          <p className={styles.hoursandphonetext}>
            Opening hours 7:00 AM - 11:00 PM
          </p>
          <p
            style={{ textDecoration: "underline" }}
            className={styles.hoursandphonetext}
            onClick={() => {
              window.location.href = `tel:+19024257956`;
            }}
          >
            +1 (902) 425-7956
          </p>
          <p
            onClick={() => {
              window.open("https://g.co/kgs/wAzimNm", "_blank");
            }}
            className={styles.hoursandphonetext}
          >
            1597 Barrington St
          </p>
          <p
            onClick={() => {
              window.open("https://g.co/kgs/wAzimNm", "_blank");
            }}
            className={styles.hoursandphonetext}
          >
            Halifax, NS Canada
          </p>
        </div>
        <div className={styles.marginBetweendiv}></div>
        <div className={styles.footerSecondSecondMainDiv}>
          <Link href="/Shop">
            <p className={styles.reservationsAndOtherLink}>Shop</p>
          </Link>
          <Link href="/ReserveTable">
            <p className={styles.reservationsAndOtherLink}>Reserve Table</p>
          </Link>
          <p className={styles.reservationsAndOtherLink}>Catering</p>
          <p className={styles.reservationsAndOtherLink}>Your Opinion Matter</p>
          <Link href="/Contact-Us">
            <p className={styles.reservationsAndOtherLink}>Contact Us</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

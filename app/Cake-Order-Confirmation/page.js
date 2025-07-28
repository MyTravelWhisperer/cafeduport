"use client";

import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Cake-Order-Confirmation.module.css";
import Button from "../components/Button/Button";
import React, { useEffect, useState, useRef } from "react";
import { Lobster_Two } from "next/font/google";
import Head from "next/head";

import { Newsreader } from "next/font/google";
const inter = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const interItalic = Lobster_Two({
  subsets: ["latin"],

  weight: ["400", "700"],
});

export default function CakeOrder() {
  const [confirmationNumber, setConfirmationNumber] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const confirmation = params.get("confirmationnumber");
    if (confirmation) {
      setConfirmationNumber(confirmation);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Custom Cake Order Confirmation</title>
      </Head>
      <main className={inter.className}>
        <div style={{ minHeight: "100px" }}>
          <Header type={"normal"} />
        </div>
        <div className={styles.mainBodyDiv}>
          <div className={styles.mainCustomCakeContainerDiv}>
            <div className={styles.mainCustomCakeSecondContainerDiv}>
              <h1 className={styles.customCakeHeaderText}>
                <i className={interItalic.className}>Order Confirmation</i>
              </h1>

              <div className={styles.eachSelectionMainDiv}>
                <p className={styles.mainDivHeader}>
                  Order number #{confirmationNumber}
                </p>
                <p className={styles.mainDivSecondHeader}>
                  Your cake has been successfully ordered. <br />
                  Our team will contact you if anything else is needed.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

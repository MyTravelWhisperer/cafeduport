"use client";

import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./CustomCakes.module.css";
import Button from "../components/Button/Button";
import React, { useEffect, useState, useRef } from "react";
import { Lobster_Two } from "next/font/google";
import ListOfCakes from "../components/ListOfCakes/ListOfCakes";
import {
  ListOfSizes,
  ListOfFlavors,
} from "../components/ListOfSizes/ListOfSizes";
import { AdditionalInformation } from "../components/AdditionalInformation/AdditionalInformation";
import Head from "next/head";

import { Newsreader } from "next/font/google";
const inter = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const interItalic = Lobster_Two({
  weight: ["400", "700"],
});
const listOfMainCategories = ["Coffee", "Syrup", "Tea"];
const listOfCategoryUrl = ["Coffee", "Hatch", "Dark Rost"];
const numberOfSteps = 3;
export default function Shop() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentState, setCurrentState] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const [selectedCake, setSelectedCake] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedFlavor, setSelectedFlavor] = useState();
  const [nextCheck, setNextCheck] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [messageOnCake, setMessageOnCake] = useState("");
  const [colorOfMessageText, setColorOfMessageText] = useState("");
  const [colorOfCake, setColorOfCake] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");
  useEffect(() => {
    var price = 0;
    if (selectedCake?.fields?.cakeBasePrice) {
      price += selectedCake?.fields?.cakeBasePrice;
    }
    if (selectedSize?.fields?.additionalPrice) {
      price += selectedSize?.fields?.additionalPrice;
    }
    if (selectedFlavor?.fields?.additionalPrice) {
      price += selectedFlavor?.fields?.additionalPrice;
    }
    setTotalPrice(price);
  }, [selectedCake, selectedSize, selectedFlavor]);

  const sendDatatoHeroku = async () => {
    try {
      const response = await fetch(
        "https://cafe-du-port-backend-eda60a9a8f7f.herokuapp.com/create-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: selectedCake?.fields?.cakeName,
            description:
              "Size: " +
              selectedSize?.fields?.sizeName +
              ", Flavours: " +
              selectedFlavor?.fields?.flavourName,
            image:
              "https:" +
                selectedCake?.fields?.cakeImages[0]?.fields?.file?.url ||
              undefined,
            price: totalPrice * 100,
            personName: name,
            personEmail: email,
            personPhoneNumber: phoneNumber,
            personAdditionalInformation: additionalInformation,
            colorOfCake: colorOfCake,
            colorOfMessageText: colorOfMessageText,
            messageOnCake: messageOnCake,
          }),
        }
      );

      const data = await response.json();

      if (data) {
        if (data?.paymentLink) {
          window.location.href = data?.paymentLink;
        }
      } else {
        console.error("Failed to create product:", data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <>
      <Head>
        <title>
          Custom Cake Orders – Cafe du Port | French Bakery in Halifax
        </title>
        <meta
          name="description"
          content="Order beautiful custom cakes from Cafe du Port in Halifax. Handcrafted French bakery cakes made to celebrate your special moments."
        />
        <meta
          name="keywords"
          content="Custom Cakes Halifax, French Bakery, Cake Orders, Cafe du Port, Birthday Cakes, Wedding Cakes, Halifax Cakes"
        />
        <meta property="og:title" content="Custom Cake Orders – Cafe du Port" />
        <meta
          property="og:description"
          content="Celebrate with custom cakes from Cafe du Port. Expertly crafted French bakery cakes in Halifax for birthdays, weddings, and special events."
        />
      </Head>
      <main className={inter.className}>
        <div style={{ minHeight: "100px" }}>
          <Header type={"normal"} />
        </div>
        <div className={styles.mainBodyDiv}>
          <div className={styles.mainCustomCakeContainerDiv}>
            <div className={styles.mainCustomCakeSecondContainerDiv}>
              <h1 className={styles.customCakeHeaderText}>
                <i className={interItalic.className}>Custom Cake </i>
              </h1>
              <div className={styles.fullStepsDiv}>
                {Array.from({ length: numberOfSteps }).map((_, index) => (
                  <div className={styles.eachStepCustom} key={index}>
                    <div
                      className={
                        currentState === index + 1
                          ? styles.eachStepSelectedIndexCustom
                          : styles.eachStepIndexCustom
                      }
                    >
                      <p
                        onClick={() => {
                          setCurrentState(index + 1);
                        }}
                        className={styles.eachStepIndexText}
                      >
                        {index + 1}
                      </p>
                    </div>
                    {index === 0 ? (
                      <p
                        onClick={() => {
                          setCurrentState(1);
                        }}
                        className={
                          currentState === 1
                            ? styles.eachStepSelectedText
                            : styles.eachStepText
                        }
                      >
                        Select Cake
                      </p>
                    ) : index === 1 ? (
                      <p
                        onClick={() => {
                          setCurrentState(2);
                        }}
                        className={
                          currentState === 2
                            ? styles.eachStepSelectedText
                            : styles.eachStepText
                        }
                      >
                        Size & Flavor
                      </p>
                    ) : (
                      <p
                        onClick={() => {
                          setCurrentState(3);
                        }}
                        className={
                          currentState === 3
                            ? styles.eachStepSelectedText
                            : styles.eachStepText
                        }
                      >
                        Info
                      </p>
                    )}
                  </div>
                ))}
              </div>
              {currentState === 1 && (
                <div className={styles.eachSelectionMainDiv}>
                  <p className={styles.mainDivHeader}>Select a cake </p>
                  <p className={styles.mainDivSecondHeader}>
                    Choose the perfect cake for your special occasion.{" "}
                  </p>
                </div>
              )}
              {currentState === 1 && (
                <ListOfCakes
                  selectCake={(cake) => {
                    console.log(cake);
                    setSelectedCake(cake);
                    setSelectedSize();
                    setSelectedFlavor();
                    setCurrentState(2);
                  }}
                  alreadySelectedCake={selectedCake}
                />
              )}
              {currentState === 2 && (
                <div className={styles.eachSelectionMainDiv}>
                  <p className={styles.mainDivHeader}>Select a size </p>
                  <p className={styles.mainDivSecondHeader}>
                    Choose the size for your cake.{" "}
                  </p>
                </div>
              )}
              {currentState === 2 && (
                <ListOfSizes
                  selectSize={(size) => {
                    setSelectedSize(size);
                  }}
                  alreadySelectedCake={selectedCake}
                  alreadySelectedSize={selectedSize}
                />
              )}

              {currentState === 2 && (
                <div className={styles.eachSelectionMainDiv}>
                  <p className={styles.mainDivHeader}>Select a flavor </p>
                  <p className={styles.mainDivSecondHeader}>
                    Choose the flavor for your cake.{" "}
                  </p>
                </div>
              )}
              {currentState === 2 && (
                <ListOfFlavors
                  selectFlavors={(flavor) => {
                    setSelectedFlavor(flavor);
                  }}
                  alreadySelectedCake={selectedCake}
                  alreadySelectedFlavor={selectedFlavor}
                />
              )}
              {currentState === 3 && (
                <div className={styles.eachSelectionMainDiv}>
                  <p className={styles.mainDivHeader}>
                    Additional Information{" "}
                  </p>
                  <p className={styles.mainDivSecondHeader}>
                    We will need some additional information before finalizing
                    your order.
                  </p>
                </div>
              )}
              {currentState === 3 && (
                <AdditionalInformation
                  sendCheck={(
                    newCheckEntered,
                    name,
                    phoneNumber,
                    email,
                    messageOnCake,
                    colorOfMessageText,
                    colorOfCake,
                    additionalInformation
                  ) => {
                    setNextCheck(newCheckEntered);
                    setName(name);
                    setPhoneNumber(phoneNumber);
                    setEmail(email);
                    setMessageOnCake(messageOnCake);
                    setColorOfMessageText(colorOfMessageText);
                    setColorOfCake(colorOfCake);
                    setAdditionalInformation(additionalInformation);
                  }}
                />
              )}
            </div>
          </div>
        </div>
        {selectedCake && (
          <div className={styles.bottomDetails}>
            <div className={styles.bottomSecondDetails}>
              <div className={styles.bottomThirdDetails}>
                {selectedCake && (
                  <div className={styles.eachCakeMainDiv}>
                    <div className={styles.eachCakeMainImageDiv}>
                      <img
                        src={`https:${selectedCake?.fields?.cakeImages[0]?.fields?.file?.url}`}
                        alt="Logo"
                        className={styles.eachCakeImage}
                      />
                    </div>
                    <div className={styles.eachCakeMainInformationDiv}>
                      <p className={styles.eachCakeNameText}>
                        {selectedCake?.fields?.cakeName}
                      </p>
                      {selectedSize?.fields?.sizeName && (
                        <p className={styles.eachCakeInfoText}>
                          Size: {selectedSize?.fields?.sizeName}
                        </p>
                      )}
                      {selectedFlavor?.fields?.flavourName && (
                        <p className={styles.eachCakeInfoText}>
                          Flavor: {selectedFlavor?.fields?.flavourName}
                        </p>
                      )}
                    </div>
                    <div className={styles.eachCakeTotalPrice}>
                      <p className={styles.eachCakeNameText}>${totalPrice}</p>
                    </div>
                  </div>
                )}
                {selectedSize && selectedFlavor && (
                  <div className={styles.bottomDiv}>
                    {currentState === 2 && (
                      <div
                        onClick={() => {
                          setCurrentState(3);
                        }}
                        className={styles.continueTextDiv}
                      >
                        <p className={styles.continueText}>Continue</p>
                      </div>
                    )}
                    {currentState === 3 && nextCheck && (
                      <div
                        onClick={() => {
                          sendDatatoHeroku();
                        }}
                        className={styles.continueTextDiv}
                      >
                        <p className={styles.continueText}>Checkout</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <Footer />
      </main>
    </>
  );
}

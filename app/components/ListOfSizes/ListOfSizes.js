"use client";

import styles from "./ListOfSizes.module.css";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { createClient } from "contentful";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

const client = createClient({
  space: "2bfqj7wucc2u",
  accessToken: "KQpq2ZrHOi2P6vM69p_0vYJtHO0mBVknCHePv1Iedoo",
});

const LIST_OF_THINGS = [];
const ListOfSizes = ({
  selectSize,
  alreadySelectedCake,
  alreadySelectedSize,
}) => {
  const [entries, setEntries] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState();

  useEffect(() => {
    if (alreadySelectedCake?.fields?.availableSizes) {
      console.log(alreadySelectedCake?.fields?.availableSizes);
      setSizes(alreadySelectedCake?.fields?.availableSizes);
    }
  }, [alreadySelectedCake]);
  useEffect(() => {
    if (alreadySelectedSize) {
      setSelectedSize(alreadySelectedSize);
    }
  }, [alreadySelectedSize]);
  return (
    <div className={styles.mainSizeSelectionDiv}>
      {sizes.map((eachSize, index) => {
        return (
          <EachSelection
            key={index}
            selectionName={eachSize?.fields?.sizeName}
            selectionDescription={documentToPlainTextString(
              eachSize?.fields?.sizeDescription
            )}
            selectionPrice={eachSize?.fields?.additionalPrice}
            selectionclicked={() => {
              setSelectedSize(eachSize);
              selectSize(eachSize);
            }}
            selected={eachSize?.sys?.id === selectedSize?.sys?.id}
          />
        );
      })}
    </div>
  );
};

const ListOfFlavors = ({
  selectFlavors,
  alreadySelectedCake,
  alreadySelectedFlavor,
}) => {
  const [flavors, setFlavors] = useState([]);
  const [selectedFlavor, setSelectedFlavor] = useState();

  useEffect(() => {
    if (alreadySelectedCake?.fields?.availableFlavours) {
      setFlavors(alreadySelectedCake?.fields?.availableFlavours);
    }
  }, [alreadySelectedCake]);
  useEffect(() => {
    if (alreadySelectedFlavor) {
      setSelectedFlavor(alreadySelectedFlavor);
    }
  }, [alreadySelectedFlavor]);
  return (
    <div className={styles.mainSizeSelectionDiv}>
      {flavors.map((eachFlavor, index) => {
        return (
          <EachSelection
            key={index}
            selectionName={eachFlavor?.fields?.flavourName}
            selectionDescription={documentToPlainTextString(
              eachFlavor?.fields?.flavourDescription
            )}
            selectionPrice={eachFlavor?.fields?.additionalPrice}
            selectionclicked={() => {
              setSelectedFlavor(eachFlavor);
              selectFlavors(eachFlavor);
            }}
            selected={eachFlavor?.sys?.id === selectedFlavor?.sys?.id}
          />
        );
      })}
    </div>
  );
};

const EachSelection = ({
  selectionName,
  selectionDescription,
  selectionImage,
  selectionPrice,
  selected,
  selectionclicked,
}) => {
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
    <div
      onClick={() => {
        selectionclicked();
      }}
      className={
        selected
          ? styles.eachSelection1DivSelected
          : styles.eachSelectionMain1Div
      }
    >
      <div className={styles.eachSelectionSecondDiv}>
        <p className={styles.selectionName}>{selectionName}</p>
        <p className={styles.selectionDescription}>{selectionDescription}</p>
        <p className={styles.selectionPrice}>+ ${selectionPrice}</p>
      </div>
    </div>
  );
};

export { ListOfSizes, ListOfFlavors };

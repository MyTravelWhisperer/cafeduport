"use client";

import styles from "./ListOfCakes.module.css";
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
const ListOfCakes = ({ selectCake, alreadySelectedCake }) => {
  const [entries, setEntries] = useState([]);
  const [selectedCake, setSelectedCake] = useState(alreadySelectedCake);

  useEffect(() => {
    client
      .getEntries({
        content_type: "cake",
        order: "fields.cakeName",
      })
      .then((response) => {
        if (response.items) {
          setEntries(response.items);
        }
      })
      .catch(console.error);
    setSelectedCake(alreadySelectedCake);
  }, []);
  return (
    <div className={styles.mainCakeSelectionDiv}>
      {entries.map((eachCake, index) => {
        return (
          <EachCake
            key={index}
            cakeName={eachCake?.fields?.cakeName}
            cakeDescription={documentToPlainTextString(
              eachCake?.fields?.cakeDescription
            )}
            cakeImages={eachCake?.fields?.cakeImages}
            cakeBasePrice={eachCake?.fields?.cakeBasePrice}
            selectCake={() => {
              setSelectedCake(eachCake);
              selectCake(eachCake);
            }}
            selected={eachCake?.sys?.id === selectedCake?.sys?.id}
          />
        );
      })}
    </div>
  );
};

const EachCake = ({
  cakeName,
  cakeDescription,
  cakeImages,
  cakeBasePrice,
  selectCake,
  selected,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [moreDetails, setMoreDetails] = useState(false);

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
        selectCake();
      }}
      className={
        selected ? styles.eachCakeMain1DivSelected : styles.eachCakeMain1Div
      }
    >
      <div className={styles.eachCakeMainDiv}>
        <div className={styles.eachCakeMainImageDiv}>
          <img
            src={`https:${cakeImages[0]?.fields?.file?.url}`}
            alt="Logo"
            className={styles.eachCakeImage}
          />
        </div>
        <p className={styles.cakeName}>{cakeName}</p>
        <p
          className={
            moreDetails ? styles.cakeFullDescription : styles.cakeDescription
          }
        >
          {cakeDescription}
        </p>
        {!moreDetails && (
          <p
            onClick={(e) => {
              e.stopPropagation();
              setMoreDetails(true);
            }}
            className={styles.cakeMoreDetails}
          >
            More details
          </p>
        )}
        {moreDetails && (
          <p
            onClick={(e) => {
              e.stopPropagation();
              setMoreDetails(false);
            }}
            className={styles.cakeMoreDetails}
          >
            Hide details
          </p>
        )}
        <p className={styles.cakePrice}>${cakeBasePrice}</p>
      </div>
    </div>
  );
};

export default ListOfCakes;

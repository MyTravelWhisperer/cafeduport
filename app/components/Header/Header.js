"use client";
import styles from "./Header.module.css";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

const Header = ({ type }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showLeftMenu, setShowLeftMenu] = useState(false);

  useEffect(() => {
    console.log(type);
    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className={styles.headerMainContainer}>
      <div className={styles.headerSecondContainer}>
        <div className={styles.headerLeftSideMain}>
          <div
            onClick={() => {
              setShowLeftMenu(true);
            }}
            className={styles.menuIconMainDiv}
          >
            <IoMenuOutline
              size={windowWidth > 500 ? 50 : 40}
              color={type === "normal" ? "#004236" : "#ffffff"}
            />
          </div>
          <div className={styles.languageMainCont}>
            {/* <div style={{ marginLeft: "10px" }}>
              <p
                style={
                  type === "normal"
                    ? { color: "#004236", fontWeight: "500" }
                    : {}
                }
                className={styles.languageButton}
              >
                En
              </p>
            </div> */}
            {/* <p
              style={
                type === "normal"
                  ? { color: "#004236", marginLeft: "5px", marginRight: "5px" }
                  : { marginLeft: "5px", marginRight: "5px" }
              }
              className={styles.languageButton}
            >
              |
            </p>
            <div>
              <p
                style={
                  type === "normal"
                    ? { color: "#004236", fontWeight: "500" }
                    : {}
                }
                className={styles.languageButton}
              >
                Fr
              </p>
            </div> */}
          </div>
        </div>
        <div className={styles.mainLogoHeader}>
          <Image
            x="0"
            y="0"
            src="/mainLogo.png"
            alt="Logo"
            style={{ objectFit: "contain" }}
            width={windowWidth > 500 ? 250.8 : 180}
            height={50}
          />
        </div>
        <div className={styles.headerRightSideMain}>
          <div>
            <Link href="/Custom-Cake">
              <p
                style={
                  type === "normal"
                    ? { color: "#004236", fontWeight: "500" }
                    : {}
                }
                className={styles.languageButton}
              >
                Custom Cakes
              </p>
            </Link>
          </div>
          <div style={{ marginLeft: "25px" }}>
            <Link href="/Shop">
              <p
                style={
                  type === "normal"
                    ? { color: "#004236", fontWeight: "500" }
                    : {}
                }
                className={styles.languageButton}
              >
                Shop
              </p>
            </Link>
          </div>
          <div style={{ marginLeft: "25px" }}>
            <Link href="/ReserveTable">
              <p
                style={
                  type === "normal"
                    ? { color: "#004236", fontWeight: "500" }
                    : {}
                }
                className={styles.languageButton}
              >
                Reserve Table
              </p>
            </Link>
          </div>
        </div>
      </div>
      {showLeftMenu && (
        <div className={styles.leftMenuMainContainer}>
          <div className={styles.leftSideMenuSecondContainer}>
            <div className={styles.headerLeftSideMain}>
              <div
                onClick={() => {
                  setShowLeftMenu(false);
                }}
                className={styles.menuIconMainDiv}
              >
                <IoCloseOutline size={55} color={"#ffffff"} />
              </div>
            </div>
            <div className={styles.leftSideMenuBottomOption}>
              <div className={styles.leftSideMenuBottomOptionMainDiv}>
                <div className={styles.menuItemsOption}>
                  <p className={styles.menuItemsText}>Menu</p>
                </div>
                <Link href="/Shop">
                  <div className={styles.menuItemsOption}>
                    <p className={styles.menuItemsText}>Shop</p>
                  </div>
                </Link>
                <div className={styles.menuItemsOption}>
                  <p className={styles.menuItemsText}>Catering</p>
                </div>
                <Link href="/ReserveTable">
                  <div className={styles.menuItemsOption}>
                    <p className={styles.menuItemsText}>Reserve Table</p>
                  </div>
                </Link>
                <Link href="/Custom-Cake">
                  <div className={styles.menuItemsOption}>
                    <p className={styles.menuItemsText}>Custom Cakes</p>
                  </div>
                </Link>

                <div className={styles.menuItemsOption}>
                  <p className={styles.menuItemsText}>Your Opinion Matters</p>
                </div>
                <Link href="/Contact-Us">
                  <div className={styles.menuItemsOption}>
                    <p className={styles.menuItemsText}>Contact Us</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

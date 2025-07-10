"use client";
import styles from "./Button.module.css";
import React, { useEffect, useState, useRef } from "react";

const Button = ({ text, link }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  return (
    <div
      onClick={() => {
        window.open(link, "_blank");
      }}
      className={styles.mainButtonDiv}
    >
      <p className={styles.textMain}>{text}</p>
    </div>
  );
};

export default Button;

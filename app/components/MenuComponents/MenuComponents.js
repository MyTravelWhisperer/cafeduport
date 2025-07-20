"use client";

import styles from "./MenuComponents.module.css";
import { Newsreader, Lobster_Two } from "next/font/google";
import { createClient } from "contentful";
import React, { useEffect, useState, useRef } from "react";

const inter = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const interItalic = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const client = createClient({
  space: "2bfqj7wucc2u",
  accessToken: "KQpq2ZrHOi2P6vM69p_0vYJtHO0mBVknCHePv1Iedoo",
});

export default function MenuComponents() {
  const [fullMenu, setFullMenu] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "menu",
      })
      .then((response) => {
        if (response.items[0]) {
          console.log(response);
          console.log(response.items[0]?.fields?.listOfMenu);
          setFullMenu(response.items[0]?.fields?.listOfMenu);
        }
      })
      .catch(console.error);
  }, []);
  return (
    <>
      {fullMenu.map((eachMenuItem, index) => {
        return (
          <div key={index} className={styles.mainMenuBodyDiv}>
            <div className={styles.menuHeaderDiv}>
              <h1 className={styles.menuheaderText}>
                <i className={interItalic.className}>
                  {eachMenuItem?.fields?.collectionMenuName}
                </i>
              </h1>
            </div>
            {eachMenuItem?.fields?.listOfMenuItem?.map(
              (eachListOfCollection, subIndex) => {
                return (
                  <EachMenuCollection
                    key={subIndex}
                    itemId={eachListOfCollection?.sys?.id}
                  />
                );
              }
            )}
          </div>
        );
      })}
    </>
  );
}

function EachMenuCollection({ itemId }) {
  const [menuItemInfo, setMenuItemInfo] = useState({});

  useEffect(() => {
    client
      .getEntry(itemId)
      .then((response) => {
        if (response?.fields) {
          setMenuItemInfo(response?.fields);
        }
      })
      .catch(console.error);
  }, []);
  return (
    <div className={styles.eachMenuItem}>
      <p className={styles.eachMenuItemText}>
        {menuItemInfo?.name} &nbsp;CAD${menuItemInfo?.cost}
      </p>
      <p className={styles.eachMenuDescriptionText}>
        {menuItemInfo?.description}
      </p>
    </div>
  );
}

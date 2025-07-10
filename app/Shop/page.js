import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Shop.module.css";
import Button from "../components/Button/Button";

import { Newsreader, Lobster_Two } from "next/font/google";
const inter = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const interItalic = Lobster_Two({
  weight: ["400", "700"],
});
const listOfMainCategories = ["Coffee", "Syrup", "Tea"];
const listOfCategoryUrl = ["Coffee", "Hatch", "Dark Rost"];

export default function Shop() {
  return (
    <main className={inter.className}>
      <div style={{ minHeight: "100px" }}>
        <Header type={"normal"} />
      </div>
      <div className={styles.mainBodyDiv}>
        <h1 className={styles.customCakeHeaderText}>
          <i className={interItalic.className}>Shop </i>
          <p
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              fontSize: "31px",
            }}
            className={styles.mainCategoryHeader}
          >
            Coming Soon...
          </p>
        </h1>
        {/* <div className={styles.bookingTableHeaderDiv}>
          <div className={styles.categoryHeaderMainDiv}>
            {listOfMainCategories.map((eachCatergory, index) => {
              return (
                <p key={index} className={styles.categoryTitle}>
                  {eachCatergory}
                </p>
              );
            })}
          </div>
          <div className={styles.mainBottomPageContainerDiv}>
            <div className={styles.mainBottomPageSecondContainerDiv}>
              <div className={styles.leftSideCategoryMainDiv}>
                <h1 className={styles.categoryHeader}>Category</h1>
                <div>
                  <p className={styles.mainCategoryHeader}>
                    Commercial Tables, Shelving & Sinks
                  </p>
                </div>
              </div>
              <div className={styles.rightSideShopMainContainer}>
                <div className={styles.rightSideCategoryUrl}>
                  {listOfCategoryUrl.map((eachUrl, index) => {
                    return (
                      <p className={styles.eachUrlText} key={index}>
                        {eachUrl}
                        {index < listOfCategoryUrl.length - 1 && (
                          <span className={styles.slashSpan}> / </span>
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </main>
  );
}

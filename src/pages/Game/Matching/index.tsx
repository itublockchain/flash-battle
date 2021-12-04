// @ts-ignore
import React, { useRef } from "react";
import styles from "./Matching.module.scss";
import Card1 from "assets/cards/card1.png";
import Card2 from "assets/cards/card2.png";

function Matching() {
  const hintRef: any = useRef();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={Card1} className={styles["first-image"]} />
        <img src={Card2} className={styles["second-image"]} />
        <span className={styles.hint} ref={hintRef}>
          Merhaba dünya
        </span>
      </div>
    </div>
  );
}

export default Matching;

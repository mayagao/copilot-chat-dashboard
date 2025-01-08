"use client";

import React, { useState } from "react";
import styles from "./Option1Panel.module.css";

const Option2Panel = () => {
  const [instructions, setInstructions] = useState(`[ROLE]
<Define role and expertises.>
        
[COMMUNICATION]
<Specify tone, language style, and output format.>
        
[KNOWLEDGE]
<Identify relevant resources or examples.>
        
[WORKFLOWS]
<Standardize common tasks like issue tracking, reviews, and bug handling.>`);

  return (
    <div className={styles.container}>
      <div className={styles.label}>Instructions</div>
      <textarea
        className={styles.input}
        rows="6"
        value={instructions}
        placeholder="Enter instructions ..."
        onChange={(e) => setInstructions(e.target.value)}
      />
    </div>
  );
};

export default Option2Panel;

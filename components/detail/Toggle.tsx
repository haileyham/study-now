'use client';
import React, { useState } from 'react';
import styles from './page.module.scss';
import { EditBtn } from './Edit';
import { DeleteBtn } from './delete';

type ToggleProps = {
  childTsxContent?: React.ReactNode;
};
const Toggle: React.FC<ToggleProps> = ({ childTsxContent }) => {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.toggleBox}>
      <button
        className={
          toggle
            ? `${styles.toggleOnBtn} ${styles.toggleBtn}`
            : `${styles.toggleBtn}`
        }
        onClick={toggleState}
      >
        <span className={toggle ? `${styles.toggleOn}` : ''}></span>
        <span className={toggle ? `${styles.toggleOn}` : ''}></span>
        <span className={toggle ? `${styles.toggleOn}` : ''}></span>
      </button>
      <div
        className={`${styles.toggleContentBox} ${
          toggle ? styles.showToggleContentBox : ''
        }`}
      >
        {childTsxContent}
      </div>
    </div>
  );
};

export default Toggle;

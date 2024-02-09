'use client';
import React, { useState } from 'react';
import styles from './page.module.scss';
import { EditBtn } from './Edit';
import { DeleteBtn } from './delete';

type ToggleProps = {
  id?: Object | String | undefined;
  childTsxContent?: React.ReactNode;
};
const Toggle: React.FC<ToggleProps> = ({ id, childTsxContent }) => {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.toggleBox}>
      <button className={styles.toggle} onClick={toggleState}>
        :
      </button>
      <div className={`${styles.btnBox} ${toggle ? styles.showBtnBox : ''}`}>
        {childTsxContent}
      </div>
    </div>
  );
};

export default Toggle;

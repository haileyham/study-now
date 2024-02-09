'use client';
import React, { useState } from 'react';
import styles from './page.module.scss';
import { EditBtn } from './Edit';
import { DeleteBtn } from './delete';

type ToggleProps = {
  id?: Object | String;
};

const Toggle: React.FC<ToggleProps> = ({ id }) => {
  const [toggle, setToggle] = useState(false);
  const toggleTest = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.toggleBox}>
      <button className={styles.toggle} onClick={toggleTest}>
        :
      </button>
      <div className={`${styles.btnBox} ${toggle ? styles.showBtnBox : ''}`}>
        <EditBtn postId={id}></EditBtn>
        <DeleteBtn postId={id}></DeleteBtn>
      </div>
    </div>
  );
};

export default Toggle;

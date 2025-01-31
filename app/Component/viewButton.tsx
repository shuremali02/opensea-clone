"use client"
import React from 'react';
import styles from  '../Styles/component/_viewButton.module.scss';
import { useRouter } from 'next/navigation';

const ViewButton = ({href, text}:{href?:string, text:string}) => {
    const router = useRouter()
  return (
    <div className={styles.styledwrapper}>
      <button onClick={()=>{router.push(href || "")}}>
     {text}
      </button>
    </div>
  );
};

export default ViewButton;

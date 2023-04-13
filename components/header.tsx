import Link from "next/link";
import React from "react";
import styles from '../styles/header.module.scss'

const Header = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">Hello everyone!</Link>
      <ul>
        <li>
        <Link href="/posts">Posts</Link>
        </li>
        <li>
        <Link href="/me">About</Link>
        </li>
      </ul>
      
    </div>
  );
};

export default Header;

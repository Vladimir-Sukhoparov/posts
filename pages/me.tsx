import Image from "next/image";
import React from "react";
import im from "../public/im.webp";
import styles from '../styles/me.module.scss'
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.box}>
        <h2>I am Vladimir Sukhoparov</h2>
        <p>I am a Frontend Developer located in Nadym, YaNAO, Russia. 🙃</p>
        <p>
          I am currently looking for a job as a remote junior frontend
          developer.
        </p>
        <p>In my free time, I improve my skills as a Frontend Developer.</p>
        <p>My git: <Link href="https://github.com/VladimirSukhoparov" target="_blank"> Vladimir Sukhoparov</Link></p>
      </div>
      <Image src={im} alt="Coder"/>
    </div>
  );
};

export default About;

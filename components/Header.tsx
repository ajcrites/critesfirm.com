import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import siteLogo from '../assets/images/crites-firm-logo-transparent.svg';
import styles from '../styles/Home.module.css'

export function Header() {
  return (
    <header className={styles.siteHeader}>
      <Link href="/"><Image src={siteLogo} width="300" height="120" alt="The Crites Firm" /></Link>
      <Link href="/contact">Contact Us</Link>
      <a href="tel:770-628-7147,7147">770-628-7147 ext. 7147</a>
    </header>
  )
}

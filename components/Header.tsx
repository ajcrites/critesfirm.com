import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import siteLogo from '../assets/images/crites-firm-logo-transparent.svg';
import styles from '../styles/Home.module.css'

export function Header() {
  const navElements = [
    {
      link: '/practice-areas',
      text: 'Practice Areas'
    },
    {
      link: '/meet-the-team',
      text: 'Meet The Team'
    },
    {
      link: '/contact',
      text: 'Contact Us'
    },
  ];

  return (
    <>
      <header className={styles.siteHeader}>
        <Link href="/">
          <a><Image src={siteLogo} width="300" height="120" alt="The Crites Firm" /></a>
        </Link>
        <a href="tel:770-628-7147">Call us now! 770-628-7147</a>
      </header>

      <nav className={styles.siteNavContainer}>
        <ul className={styles.siteNav}>
          {navElements.map(({ link, text }) =>
            <li key={link} className={styles.siteNavLink}>
              <Link href={link}>
                <a>{text}</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  )
}

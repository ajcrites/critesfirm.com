import React from 'react';
import styles from '../styles/Home.module.css'

export function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <p>
        Copyright &copy; 2022 - The Crites Firm
      </p>
      <address>
        3350 Riverwood Pkwy<br />
        Suite 1900<br />
        Atlanta, GA 30339<br />
        <a href="tel:770-628-7147,7147">770-628-7147 ext. 7147</a>
      </address>
    </footer>
  )
}

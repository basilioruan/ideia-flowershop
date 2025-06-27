import Image from 'next/image';
import styles from './styles.module.css';
import flowershopIcon from '../../../public/assets/flowershop_icon.png';
import Link from 'next/link';
import headerData from './data/header.data';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <section className={styles.icon}>
            <Image src={flowershopIcon} className={styles.image} alt='Ícone Ideia Floricultura' />
          </section>
          
          {/* Menu Desktop */}
          <nav className={styles.nav}>
            {headerData.map(link => (
              <Link key={link.name} href={link.href} className={styles.link}>
                <link.icon className={styles.linkIcon} /> {link.name}
              </Link>
            ))}
          </nav>

          {/* Bot�o Menu Mobile */}
          <button className={styles.menuButton} onClick={toggleMenu}>
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Menu Mobile */}
        <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          {headerData.map(link => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={styles.mobileLink}
              onClick={() => setIsMenuOpen(false)}
            >
              <link.icon className={styles.mobileLinkIcon} /> {link.name}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
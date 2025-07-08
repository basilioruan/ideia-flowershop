import Image from 'next/image';
import styles from './styles.module.css';
import flowershopIcon from '../../../public/assets/flowershop_icon.png';
import Link from 'next/link';
import { navigationData } from '../../commons/data/navigation.data';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import ContactModal from '../contact-modal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkName: string) => {
    if (linkName === 'FALE CONOSCO') {
      setIsContactModalOpen(true);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={styles.header}>
        {/* Top bar com informações de contato */}
        <div className={styles.topBar}>
          <div className={styles.topBarContainer}>
            <div className={styles.contactInfo}>
              <a href="tel:+5535997417863" className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>(35) 99741-7863</span>
              </a>
              <a href="mailto:ideasfloricultura@hotmail.com" className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>ideasfloricultura@hotmail.com</span>
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com/ideasfloricultura" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaInstagram className={styles.socialIcon} />
                <span>Instagram</span>
              </a>
              <a href="https://wa.me/5535997417863" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaWhatsapp className={styles.socialIcon} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Header principal */}
        <div className={styles.mainHeader}>
          <div className={styles.headerContainer}>
            {/* Logo e branding */}
            <div className={styles.brandSection}>
              <Link href="/" className={styles.logoLink}>
                <div className={styles.logoContainer}>
                  <Image src={flowershopIcon} className={styles.logoImage} alt='Ícone Ideia Floricultura' />
                  <div className={styles.brandText}>
                    <h1 className={styles.brandName}>Ideas Floricultura</h1>
                    <p className={styles.brandTagline}>Natureza e beleza para sua vida</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Navegação Desktop */}
            <nav className={styles.desktopNav}>
              {navigationData.map(link => (
                link.name === 'FALE CONOSCO' ? (
                  <button 
                    key={link.name} 
                    onClick={() => handleLinkClick(link.name)}
                    className={`${styles.navLink} ${styles.contactButton}`}
                  >
                    <link.icon className={styles.navIcon} />
                    <span>{link.name}</span>
                  </button>
                ) : (
                  <Link key={link.name} href={link.href} className={styles.navLink}>
                    <link.icon className={styles.navIcon} />
                    <span>{link.name}</span>
                  </Link>
                )
              ))}
            </nav>

            {/* Botão Menu Mobile */}
            <button className={styles.mobileMenuButton} onClick={toggleMenu}>
              <span className={styles.menuButtonText}>Menu</span>
              {isMenuOpen ? <HiX className={styles.menuIcon} /> : <HiMenu className={styles.menuIcon} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Overlay */}
        <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayOpen : ''}`}>
          <nav className={styles.mobileNav}>
            <div className={styles.mobileNavHeader}>
              <h3>Menu de Navegação</h3>
              <button className={styles.mobileCloseButton} onClick={toggleMenu}>
                <HiX />
              </button>
            </div>
            <div className={styles.mobileNavContent}>
              {navigationData.map(link => (
                link.name === 'FALE CONOSCO' ? (
                  <button 
                    key={link.name} 
                    onClick={() => handleLinkClick(link.name)}
                    className={`${styles.mobileNavLink} ${styles.mobileContactButton}`}
                  >
                    <link.icon className={styles.mobileNavIcon} />
                    <span>{link.name}</span>
                  </button>
                ) : (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className={styles.mobileNavLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <link.icon className={styles.mobileNavIcon} />
                    <span>{link.name}</span>
                  </Link>
                )
              ))}
            </div>
          </nav>
        </div>
      </header>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
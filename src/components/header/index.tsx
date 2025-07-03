import Image from 'next/image';
import styles from './styles.module.css';
import flowershopIcon from '../../../public/assets/flowershop_icon.png';
import Link from 'next/link';
import headerData from './data/header.data';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import ContactModal from '../contact-modal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkName: string, href: string) => {
    if (linkName === 'FALE CONOSCO') {
      setIsContactModalOpen(true);
      setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
    }
  };

  return (
    <>
      <header className={styles.header}>
        {/* Top bar com informações de contato */}
        <div className={styles.topBar}>
          <div className={styles.topBarContainer}>
            <div className={styles.contactInfo}>
              <span className={styles.contactItem}>
                📞 (35) 99741-7863
              </span>
              <span className={styles.contactItem}>
                📧 ideasfloricultura@hotmail.com
              </span>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com/ideasfloricultura" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                📷 Instagram
              </a>
              <a href="https://wa.me/5535997417863" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                💬 WhatsApp
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
              {headerData.map(link => (
                link.name === 'FALE CONOSCO' ? (
                  <button 
                    key={link.name} 
                    onClick={() => handleLinkClick(link.name, link.href)}
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
              {headerData.map(link => (
                link.name === 'FALE CONOSCO' ? (
                  <button 
                    key={link.name} 
                    onClick={() => handleLinkClick(link.name, link.href)}
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
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { GiFlowerPot } from 'react-icons/gi';
import { IoIosHome } from 'react-icons/io';
import { TbShovelPitchforks } from 'react-icons/tb';
import { FaInfoCircle } from 'react-icons/fa';
import { useState } from 'react';
import ContactModal from '../contact-modal';
import flowershopIcon from '../../../public/assets/flowershop_icon.png';

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const getCurrentYear = () => (new Date().getFullYear());

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const navigationLinks = [
    { name: 'Início', icon: IoIosHome, href: '/' },
    { name: 'Produtos', icon: GiFlowerPot, href: '/produtos' },
    { name: 'Serviços', icon: TbShovelPitchforks, href: '/servicos' },
    { name: 'Quem Somos', icon: FaInfoCircle, href: '/' }
  ];

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <div className={styles.footerContainer}>
            
            <div className={styles.brandSection}>
              <div className={styles.logoContainer}>
                <Image 
                  src={flowershopIcon} 
                  className={styles.logoImage} 
                  alt='Ícone Ideas Floricultura'
                  width={50}
                  height={50}
                />
                <div className={styles.brandText}>
                  <h3 className={styles.brandName}>Ideas Floricultura</h3>
                  <p className={styles.brandTagline}>Natureza e beleza para sua vida</p>
                </div>
              </div>
            </div>

            <div className={styles.quickLinks}>
              <h4 className={styles.sectionTitle}>Navega��o</h4>
              <nav className={styles.footerNav}>
                {navigationLinks.map(link => (
                  <Link key={link.name} href={link.href} className={styles.footerNavLink}>
                    <link.icon className={styles.footerNavIcon} />
                    <span>{link.name}</span>
                  </Link>
                ))}
                <button onClick={handleContactClick} className={styles.footerContactButton}>
                  <FaPhone className={styles.footerNavIcon} />
                  <span>Fale Conosco</span>
                </button>
              </nav>
            </div>

            <div className={styles.contactSection}>
              <h4 className={styles.sectionTitle}>Contato</h4>
              <div className={styles.contactInfo}>
                <a href="tel:+5535997417863" className={styles.contactItem}>
                  <FaPhone className={styles.contactIcon} />
                  <span>(35) 99741-7863</span>
                </a>
                <a href="mailto:ideasfloricultura@hotmail.com" className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <span>ideasfloricultura@hotmail.com</span>
                </a>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>Macuco de Minas - MG</span>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.sectionTitle}>Redes Sociais</h4>
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
              <p className={styles.socialDescription}>
                Siga-nos para ver nossos trabalhos e novidades!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContainer}>
            <p className={styles.copyright}>
              {getCurrentYear()} © Ideas Floricultura - Todos os direitos reservados
            </p>
            <p className={styles.location}>
              Macuco de Minas - MG
            </p>
          </div>
        </div>
      </footer>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
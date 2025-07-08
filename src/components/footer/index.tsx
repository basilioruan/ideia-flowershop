import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import ContactModal from '../contact-modal';
import flowershopIcon from '../../../public/assets/flowershop_icon.png';
import navigationData from '@/commons/data/navigation.data';
import { contactData, ContactItem } from '@/commons/data/contact.data';
import { ContactEnum } from '@/commons/enums/contact.enum';

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const getCurrentYear = () => (new Date().getFullYear());

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const getContactInfo = (contact: ContactEnum): ContactItem | undefined => {
    return contactData.find(cd => cd.id === contact);
  }

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
              <h4 className={styles.sectionTitle}>Navegação</h4>
              <nav className={styles.footerNav}>
                {navigationData.map(link => (
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
                <div className={styles.contactItem}>
                  <FaPhone className={styles.contactIcon} />
                  <span>{getContactInfo(ContactEnum.PHONE)?.value}</span>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <span>{getContactInfo(ContactEnum.EMAIL)?.value}</span>
                </div>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>{getContactInfo(ContactEnum.ADDRESS)?.value}</span>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.sectionTitle}>Redes Sociais</h4>
              <div className={styles.socialLinks}>
                <a href={getContactInfo(ContactEnum.INSTAGRAM)?.link} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <FaInstagram className={styles.socialIcon} />
                  <span>{getContactInfo(ContactEnum.INSTAGRAM)?.value}</span>
                </a>
                <a href={getContactInfo(ContactEnum.WHATSAPP)?.link} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <FaWhatsapp className={styles.socialIcon} />
                  <span>{getContactInfo(ContactEnum.WHATSAPP)?.value}</span>
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
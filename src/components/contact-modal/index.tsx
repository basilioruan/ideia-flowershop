import React from 'react';
import Modal from '../modal';
import styles from './styles.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import ContactModalProps from './interface/contact-modal.interface';
import Link from 'next/link';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Fale Conosco">
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <div>
              <strong>Telefone:</strong>
              <p>(35) 99741-7863 </p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaWhatsapp className={styles.contactIcon} />
            <div>
              <strong>WhatsApp:</strong>
              <Link href="https://wa.me/message/E56S2CSIOF5XM1" target='_blank'>wa.me/message/E56S2CSIOF5XM1</Link>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <div>
              <strong>E-mail:</strong>
              <p>ideasfloricultura@hotmail.com</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <div>
              <strong>Endereço:</strong>
              <p>Av. Antonio de Souze, 165<br />Macuco de Minas - Itumirim/MG</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaInstagram className={styles.contactIcon} />
            <div>
              <strong>Instagram:</strong>
              <Link href="https://instagram.com/ideasfloricultura" target="_blank">@ideasfloricultura</Link>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaFacebookF className={styles.contactIcon} />
            <div>
              <strong>Facebook:</strong>
              <Link href="https://facebook.com/ideasfloricultura" target="_blank">Ideas Floricultura</Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
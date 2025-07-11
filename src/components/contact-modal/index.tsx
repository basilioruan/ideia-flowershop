import React from 'react';
import Modal from '../modal';
import styles from './styles.module.css';
import Link from 'next/link';
import { contactData } from '../../commons/data/contact.data';
import { ContactModalProps } from '@/types/contact.types';
import { NavigationEnum } from '@/commons/enums/navigation.enum';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const renderContactValue = (item: typeof contactData[0]) => {
    if (item.link) {
      return (
        <Link 
          href={item.link} 
          target='_blank'
          rel='noopener noreferrer'
        >
          {item.value}
        </Link>
      );
    }
    
    if (item.value.includes('\n')) {
      return (
        <p>
          {item.value.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < item.value.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      );
    }
    
    return <p>{item.value}</p>;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={NavigationEnum.FALE_CONOSCO}>
      <div className={styles.contactContent}>
        
        <div className={styles.contactInfo}>
          {contactData.map((item) => {
            const IconComponent = item.icon;
            
            return (
              <div key={item.id} className={styles.contactItem}>
                <IconComponent className={styles.contactIcon} />
                <div>
                  <strong>{item.label}</strong>
                  {renderContactValue(item)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
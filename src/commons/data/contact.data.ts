import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { ContactEnum } from '../enums/contact.enum';

export interface ContactItem {
  id: ContactEnum;
  icon: IconType;
  label: string;
  value: string;
  link?: string;
  isExternal?: boolean;
}

export const contactData: ContactItem[] = [
  {
    id: ContactEnum.PHONE,
    icon: FaPhone,
    label: 'Telefone',
    value: '(35) 99741-7863'
  },
  {
    id: ContactEnum.WHATSAPP,
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: 'WhatsApp',
    link: 'https://wa.me/message/E56S2CSIOF5XM1'
  },
  {
    id: ContactEnum.EMAIL,
    icon: FaEnvelope,
    label: 'E-mail',
    value: 'ideasfloricultura@hotmail.com',
  },
  {
    id: ContactEnum.ADDRESS,
    icon: FaMapMarkerAlt,
    label: 'Endereço',
    value: 'Av. Antonio de Souza, 165\nMacuco de Minas - Itumirim/MG'
  },
  {
    id: ContactEnum.INSTAGRAM,
    icon: FaInstagram,
    label: 'Instagram',
    value: '@ideasfloricultura',
    link: 'https://instagram.com/ideasfloricultura'
  },
  {
    id: ContactEnum.FACEBOOK,
    icon: FaFacebookF,
    label: 'Facebook',
    value: 'Ideas Floricultura',
    link: 'https://facebook.com/ideasfloricultura'
  }
];
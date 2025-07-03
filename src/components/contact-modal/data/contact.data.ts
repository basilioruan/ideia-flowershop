import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface ContactItem {
  id: string;
  icon: IconType;
  label: string;
  value: string;
  link?: string;
  isExternal?: boolean;
}

export const contactData: ContactItem[] = [
  {
    id: 'phone',
    icon: FaPhone,
    label: 'Telefone',
    value: '(35) 99741-7863'
  },
  {
    id: 'whatsapp',
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: 'wa.me/message/E56S2CSIOF5XM1',
    link: 'https://wa.me/message/E56S2CSIOF5XM1'
  },
  {
    id: 'email',
    icon: FaEnvelope,
    label: 'E-mail',
    value: 'ideasfloricultura@hotmail.com',
    link: 'mailto:ideasfloricultura@hotmail.com'
  },
  {
    id: 'address',
    icon: FaMapMarkerAlt,
    label: 'Endereço',
    value: 'Av. Antonio de Souze, 165\nMacuco de Minas - Itumirim/MG'
  },
  {
    id: 'instagram',
    icon: FaInstagram,
    label: 'Instagram',
    value: '@ideasfloricultura',
    link: 'https://instagram.com/ideasfloricultura'
  },
  {
    id: 'facebook',
    icon: FaFacebookF,
    label: 'Facebook',
    value: 'Ideas Floricultura',
    link: 'https://facebook.com/ideasfloricultura'
  }
];
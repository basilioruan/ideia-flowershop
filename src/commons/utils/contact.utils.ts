import { contactData, ContactItem } from '@/commons/data/contact.data';
import { ContactEnum } from '../enums/contact.enum';

export const getContactInfo = (contact: ContactEnum): ContactItem | undefined => {
  return contactData.find(cd => cd.id === contact);
}
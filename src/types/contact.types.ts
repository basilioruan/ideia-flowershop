import { IconType } from 'react-icons';

// Interface para informações de contato (reutilizável)
export interface ContactInfo {
  id: string;
  type: 'phone' | 'email' | 'address' | 'social';
  label: string;
  value: string;
  icon: IconType;
  link?: string;
  isExternal?: boolean;
}

// Interface para componentes de contato
export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contacts?: ContactInfo[];
}

// Interface para formulário de contato
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
}
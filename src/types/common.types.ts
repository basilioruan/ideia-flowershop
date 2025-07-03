import { IconType } from 'react-icons';

// Interfaces comuns usadas em múltiplas páginas
export interface PageProps {
  title: string;
  description?: string;
  icon?: IconType;
}

// Interface para componentes com loading
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

// Interface para componentes com paginação
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Interface para modais
export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

// Interface para botões de ação
export interface ActionButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  loading?: boolean;
}
// Arquivo de barrel para exportar todas as interfaces
export * from './produto.types';
export * from './common.types';
export * from './contact.types';

// Re-exportações para facilitar imports
export type { Produto, ProdutoCardProps, ProdutoDetailProps } from './produto.types';
export type { PageProps, LoadingState, BaseModalProps } from './common.types';
export type { ContactInfo, ContactModalProps, ContactFormData } from './contact.types';
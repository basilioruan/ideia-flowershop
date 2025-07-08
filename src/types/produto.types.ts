import { StaticImageData } from 'next/image';

export interface Produto {
  id: number;
  name: string;
  descricao: string;
  img: StaticImageData;
}

export interface ProdutoCardProps {
  produto: Produto;
  showDetails?: boolean;
  onFavorite?: (id: number) => void;
}

export interface ProdutoDetailProps {
  produto: Produto;
  relatedProducts?: Produto[];
}

export interface ProdutoFilters {
  categoria?: string;
  preco?: {
    min: number;
    max: number;
  };
  disponivel?: boolean;
}
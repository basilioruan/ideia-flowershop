import { StaticImageData } from 'next/image';

// Interface base do produto
export interface Produto {
  id: number;
  name: string;
  descricao: string;
  img: StaticImageData;
}

// Interface para props de componentes de produto
export interface ProdutoCardProps {
  produto: Produto;
  showDetails?: boolean;
  onFavorite?: (id: number) => void;
}

// Interface para página de detalhes
export interface ProdutoDetailProps {
  produto: Produto;
  relatedProducts?: Produto[];
}

// Interface para filtros de produto
export interface ProdutoFilters {
  categoria?: string;
  preco?: {
    min: number;
    max: number;
  };
  disponivel?: boolean;
}
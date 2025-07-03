# 📚 **Guia de Uso das Interfaces Compartilhadas**

## 🏗️ **Estrutura Implementada**

```
src/types/
├── index.ts              # Barrel file (exporta tudo)
├── produto.types.ts      # Interfaces relacionadas a produtos
├── common.types.ts       # Interfaces comuns (modais, loading, etc.)
└── contact.types.ts      # Interfaces de contato
```

## 🔥 **Como Usar**

### **1. Import Simples**
```tsx
// ✅ Import direto do barrel file
import { Produto, LoadingState, ContactInfo } from '@/types';

// ❌ Evite imports específicos (menos organizado)
import { Produto } from '@/types/produto.types';
```

### **2. Exemplo em Componentes**
```tsx
// components/ProductCard.tsx
import { Produto } from '@/types';

interface ProductCardProps {
  produto: Produto;
  onFavorite?: (id: number) => void;
}

export default function ProductCard({ produto, onFavorite }: ProductCardProps) {
  return (
    <div>
      <h3>{produto.name}</h3>
      <p>{produto.descricao}</p>
    </div>
  );
}
```

### **3. Exemplo em Páginas**
```tsx
// pages/produtos/index.tsx
import { Produto, LoadingState } from '@/types';

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<LoadingState>({ isLoading: true });
  
  // ...resto do código
}
```

### **4. Extensão de Interfaces**
```tsx
// Estendendo interfaces existentes
import { Produto } from '@/types';

interface ProdutoComPreco extends Produto {
  preco: number;
  promocao?: boolean;
}
```

## 🎯 **Benefícios**

✅ **Reutilização**: Uma interface, múltiplos componentes  
✅ **Consistência**: Mesma estrutura em todo projeto  
✅ **Manutenção**: Mudança em um lugar, reflete em todos  
✅ **TypeScript**: Autocomplete e validação automática  
✅ **Organização**: Código mais limpo e estruturado  

## 📝 **Convenções Adotadas**

- **Nomes**: PascalCase (ex: `Produto`, `ContactInfo`)
- **Arquivos**: kebab-case (ex: `produto.types.ts`)
- **Exports**: Usar barrel file (`src/types/index.ts`)
- **Imports**: Sempre do barrel (`@/types`)
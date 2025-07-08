import { useState, useMemo } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import PageTitle from "@/components/page-title";
import produtosMock from "./mock/produtos.mock";
import styles from "./styles.module.css";
import { navigationData } from "@/commons/data/navigation.data";
import { 
  FaSearch, 
  FaFilter, 
  FaHeart, 
  FaRegHeart, 
  FaEye,
  FaTag
} from "react-icons/fa";

export default function Produtos() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [sortBy, setSortBy] = useState("name");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const productsIcon = navigationData.find(h => h.name === 'PRODUTOS')?.icon;

  // Get unique categories
  const categories = ["Todas", ...Array.from(new Set(produtosMock.map(p => p.categoria)))];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = produtosMock.filter(produto => {
      const matchesSearch = produto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           produto.descricao.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Todas" || produto.categoria === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.preco - b.preco;
        case "price-high":
          return b.preco - a.preco;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const handleProductClick = (id: number) => {
    router.push(`/produto-detail/${id}`);
  };


  return (
    <div className={styles.pageContainer}>
      <PageTitle title="Nossos Produtos" icon={productsIcon} />
      
      {/* Search and Filter Section */}
      <div className={styles.controlsSection}>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <button 
          className={styles.filterToggle}
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter /> Filtros
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className={styles.filtersContainer}>
          <div className={styles.filterGroup}>
            <label>Categoria:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={styles.filterSelect}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Ordenar por:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="name">Nome A-Z</option>
              <option value="price-low">Menor Preco</option>
              <option value="price-high">Maior Preco</option>
              <option value="rating">Melhor Avaliacao</option>
            </select>
          </div>
        </div>
      )}

      {/* Results Info */}
      <div className={styles.resultsInfo}>
        <span>{filteredAndSortedProducts.length} produto(s) encontrado(s)</span>
      </div>

      {/* Products Grid */}
      <div className={styles.productsGrid}>
        {filteredAndSortedProducts.map(produto => (
          <div key={produto.id} className={styles.productCard}>
            {produto.prontaEntrega && (
              <div className={styles.stockTag}>
                <FaTag /> Pronta Entrega
              </div>
            )}
            
            <div 
              className={styles.imageContainer}
              onClick={() => handleProductClick(produto.id)}
            >
              <Image 
                src={produto.img} 
                alt={produto.name}
                className={styles.productImage}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productHeader}>
                <h3 className={styles.productName}>{produto.name}</h3>
                <button 
                  className={styles.favoriteBtn}
                  onClick={() => toggleFavorite(produto.id)}
                >
                  {favorites.includes(produto.id) ? 
                    <FaHeart className={styles.favoriteActive} /> : 
                    <>
                      <FaRegHeart className={styles.favoriteEmpty} />
                      <FaHeart className={styles.favoriteFilled} />
                    </>
                  }
                </button>
              </div>


              <p className={styles.productDescription}>
                {produto.descricao}
              </p>

              <div className={styles.priceContainer}>
                <span className={styles.price}>
                  R$ {produto.preco.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <div className={styles.actionButtons}>
                <button 
                  className={styles.viewDetailsBtn}
                  onClick={() => handleProductClick(produto.id)}
                >
                  <FaEye />
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className={styles.noResults}>
          <p>Nenhum produto encontrado com os filtros selecionados.</p>
        </div>
      )}
    </div>
  )
}
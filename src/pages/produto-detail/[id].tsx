import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import produtosMock from '../produtos/mock/produtos.mock';
import styles from './styles.module.css';
import { FaArrowLeft, FaHeart, FaShare, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Produto } from '@/types';

export default function ProdutoDetalhes() {
  const router = useRouter();
  const { id } = router.query;
  const [produto, setProduto] = useState<Produto>();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (id) {
      const produtoEncontrado = produtosMock.find(p => p.id === parseInt(id as string));
      setProduto(produtoEncontrado);
    }
  }, [id]);

  const handleWhatsAppContact = () => {
    const message = `Olá! Tenho interesse no produto: ${produto?.name}`;
    const whatsappUrl = `https://wa.me/5535997417863?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: produto?.name,
        text: produto?.descricao,
        url: window.location.href,
      });
    }
  };

  if (!produto) {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.loading}>
          <p>Carregando produto...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.backButton}>
        <Link href="/produtos" className={styles.backLink}>
          <FaArrowLeft />
          <span>Voltar aos produtos</span>
        </Link>
      </div>
      
      <div className={styles.productContainer}>
        <div className={styles.imageSection}>
          <div className={styles.mainImageContainer}>
            <Image 
              src={produto.img} 
              alt={produto.name}
              className={styles.mainImage}
              priority
            />
            <button 
              className={`${styles.favoriteBtn} ${isFavorite ? styles.favoriteActive : ''}`}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <FaHeart />
            </button>
          </div>

          {/* Seção de cuidados - movida para baixo da imagem */}
          <div className={styles.careInstructions}>
            <h3>Cuidados</h3>
            <div className={styles.careGrid}>
              <div className={styles.careItem}>
                <span className={styles.careIcon}>💧</span>
                <div>
                  <strong>Rega</strong>
                  <p>Mantenha o solo úmido, mas não encharcado</p>
                </div>
              </div>
              <div className={styles.careItem}>
                <span className={styles.careIcon}>☀️</span>
                <div>
                  <strong>Luz</strong>
                  <p>Luz indireta ou meia-sombra</p>
                </div>
              </div>
              <div className={styles.careItem}>
                <span className={styles.careIcon}>🌡️</span>
                <div>
                  <strong>Temperatura</strong>
                  <p>Entre 18°C e 25°C</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de informações */}
        <div className={styles.infoSection}>
          <div className={styles.productHeader}>
            <h1 className={styles.productTitle}>{produto.name}</h1>
            <button className={styles.shareBtn} onClick={handleShare}>
              <FaShare />
            </button>
          </div>

          <div className={styles.productDescription}>
            <h3>Descrição</h3>
            <p>{produto.descricao}</p>
          </div>

          <div className={styles.productDetails}>
            <h3>Características</h3>
            <ul>
              <li>Produto natural e fresco</li>
              <li>Ideal para decoração e presentes</li>
              <li>Cuidados especiais inclusos</li>
              <li>Entrega em Itumirim e região</li>
            </ul>
          </div>

          <div className={styles.contactSection}>
            <h3>Interessado? Entre em contato!</h3>
            <div className={styles.contactButtons}>
              <button 
                className={styles.whatsappBtn}
                onClick={handleWhatsAppContact}
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </button>
              <Link 
                href="https://instagram.com/ideasfloricultura" 
                target="_blank"
                className={styles.instagramBtn}
              >
                <FaInstagram />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.relatedSection}>
        <h3>Outros produtos que você pode gostar</h3>
        <div className={styles.relatedGrid}>
          {produtosMock
            .filter(p => p.id !== produto.id)
            .slice(0, 3)
            .map(relatedProduct => (
              <Link 
                key={relatedProduct.id} 
                href={`/produto-detail/${relatedProduct.id}`}
                className={styles.relatedCard}
              >
                <Image 
                  src={relatedProduct.img} 
                  alt={relatedProduct.name}
                  className={styles.relatedImage}
                />
                <h4>{relatedProduct.name}</h4>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}
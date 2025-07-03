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
      
      {/* Layout em seção única - mais moderno */}
      <div className={styles.heroSection}>
        {/* Título principal */}
        <div className={styles.titleSection}>
          <h1 className={styles.productTitle}>{produto.name}</h1>
          <div className={styles.actionButtons}>
            <button 
              className={`${styles.favoriteBtn} ${isFavorite ? styles.favoriteActive : ''}`}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <FaHeart />
            </button>
            <button className={styles.shareBtn} onClick={handleShare}>
              <FaShare />
            </button>
          </div>
        </div>

        {/* Container principal - layout flexível */}
        <div className={styles.mainContent}>
          {/* Imagem principal */}
          <div className={styles.imageContainer}>
            <Image 
              src={produto.img} 
              alt={produto.name}
              className={styles.productImage}
              priority
            />
          </div>

          {/* Informações do produto */}
          <div className={styles.productInfo}>
            <div className={styles.infoCard}>
              <h3>Sobre este produto</h3>
              <p>{produto.descricao}</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Características</h3>
              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>🌿</span>
                  <span>Natural e fresco</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>🎁</span>
                  <span>Ideal para presentes</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>📋</span>
                  <span>Cuidados inclusos</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>🚚</span>
                  <span>Entrega local</span>
                </div>
              </div>
            </div>

            {/* Seção de contato movida para cá */}
            <div className={styles.contactCard}>
              <h3>Gostou? Entre em contato!</h3>
              <p>Tire suas dúvidas ou faça seu pedido</p>
              <div className={styles.contactActions}>
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
      </div>

      {/* Seção de cuidados expandida - largura total */}
      <div className={styles.careSection}>
        <h2>Guia de Cuidados</h2>
        <div className={styles.careGrid}>
          <div className={styles.careCard}>
            <div className={styles.careIcon}>💧</div>
            <h4>Rega</h4>
            <p>Mantenha o solo úmido mas não encharcado. Regue 2-3 vezes por semana, verificando a umidade do solo com o dedo.</p>
          </div>
          <div className={styles.careCard}>
            <div className={styles.careIcon}>☀️</div>
            <h4>Iluminação</h4>
            <p>Prefere luz indireta ou meia-sombra. Evite sol direto nas horas mais quentes do dia para não queimar as folhas.</p>
          </div>
          <div className={styles.careCard}>
            <div className={styles.careIcon}>🌡️</div>
            <h4>Temperatura</h4>
            <p>Temperatura ideal entre 18°C e 25°C. Proteja de correntes de ar frio e mudanças bruscas de temperatura.</p>
          </div>
          <div className={styles.careCard}>
            <div className={styles.careIcon}>🌱</div>
            <h4>Fertilização</h4>
            <p>Fertilize mensalmente com adubo orgânico ou NPK diluído para manter a planta saudável e com crescimento vigoroso.</p>
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
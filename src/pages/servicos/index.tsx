import { useState } from 'react';
import PageTitle from '@/components/page-title';
import servicosMock from './mock/servicos.mock';
import styles from './styles.module.css';
import { navigationData } from '@/commons/data/navigation.data';
import { 
  FaLeaf, 
  FaHeart, 
  FaStar, 
  FaPhone, 
  FaWhatsapp,
  FaArrowRight,
  FaGift
} from 'react-icons/fa';

export default function Servicos() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  const servicesIcon = navigationData.find(h => h.name === 'SERVIÇOS')?.icon;

  return (
    <div className={styles.pageContainer}>
      <PageTitle title="Nossos Serviços" icon={servicesIcon} />
      
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h2 className={styles.heroTitle}>
                <FaLeaf className={styles.heroIcon} />
                Decoração de Casamentos dos Sonhos
              </h2>
              <p className={styles.heroDescription}>
                Especializados em criar decorações florais únicas e personalizadas para o seu casamento. 
                Transformamos seu dia especial em uma celebração inesquecível com arranjos exclusivos 
                que refletem o amor e a personalidade do casal.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.featureHighlight}>
                  <FaHeart className={styles.featureIcon} />
                  <span>Decorações Personalizadas</span>
                </div>
                <div className={styles.featureHighlight}>
                  <FaStar className={styles.featureIcon} />
                  <span>Flores Frescas Premium</span>
                </div>
                <div className={styles.featureHighlight}>
                  <FaGift className={styles.featureIcon} />
                  <span>Consultoria Especializada</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - New Design */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Pacotes de Decoração para Casamentos</h3>
            <div className={styles.sectionLine}></div>
            <p className={styles.sectionSubtitle}>
              Cada momento do seu casamento merece uma decoração especial
            </p>
          </div>

          <div className={styles.servicesContainer}>
            {servicosMock.map(servico => (
              <div 
                key={servico.id}
                className={`${styles.serviceItem} ${hoveredService === servico.id ? styles.serviceItemActive : ''}`}
                onMouseEnter={() => setHoveredService(servico.id)}
                onMouseLeave={() => setHoveredService(null)}
              > 
                <div className={styles.serviceContent}>
                  <div className={styles.serviceLeft}>
                    <div className={styles.serviceBadge}>
                      {servico.categoria}
                    </div>
                    <h4 className={styles.serviceTitle}>{servico.nome}</h4>
                    <p className={styles.serviceDesc}>{servico.descricao}</p>
                    
                    <div className={styles.serviceHighlights}>
                      {servico.detalhes.slice(0, 3).map((detalhe, idx) => (
                        <div key={idx} className={styles.highlight}>
                          <div className={styles.highlightDot}></div>
                          <span>{detalhe}</span>
                        </div>
                      ))}
                      {servico.detalhes.length > 3 && (
                        <div className={styles.moreItems}>
                          <span>+ {servico.detalhes.length - 3} itens adicionais</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className={styles.serviceRight}>
                    <div className={styles.priceSection}>
                      <div className={styles.priceLabel}>Investimento</div>
                      <div className={styles.priceValue}>{servico.preco}</div>
                      <div className={styles.priceNote}>*Valores podem variar conforme personalização</div>
                    </div>
                    
                    <div className={styles.serviceActions}>
                      <button className={styles.primaryAction}>
                        <FaWhatsapp className={styles.actionIcon} />
                        <span>Solicitar Orçamento</span>
                      </button>
                      <button className={styles.secondaryAction}>
                        <span>Ver Detalhes</span>
                        <FaArrowRight className={styles.actionArrow} />
                      </button>
                    </div>
                    
                    <div className={styles.availability}>
                      <div className={`${styles.availabilityDot} ${servico.disponivel ? styles.available : styles.unavailable}`}></div>
                      <span>{servico.disponivel ? 'Disponível para agendamento' : 'Temporariamente indisponível'}</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.serviceDecor}>
                  <FaLeaf className={styles.decorIcon} />
                  <div className={styles.decorLine}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.servicesFooter}>
            <div className={styles.footerContent}>
              <div className={styles.footerText}>
                <h4>Não encontrou o que procura?</h4>
                <p>Criamos pacotes personalizados para atender suas necessidades específicas</p>
              </div>
              <button className={styles.customPackageButton}>
                <FaHeart className={styles.customIcon} />
                <span>Criar Pacote Personalizado</span>
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h3 className={styles.ctaTitle}>Pronto para criar algo especial?</h3>
              <p className={styles.ctaDescription}>
                Entre em contato conosco e vamos planejar juntos o seu evento dos sonhos.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaButton}>
                <FaWhatsapp className={styles.ctaIcon} />
                WhatsApp
              </button>
              <button className={styles.ctaButtonSecondary}>
                <FaPhone className={styles.ctaIcon} />
                Ligar Agora
              </button>
            </div>
          </div>
        </section>

    </div>
  );
}
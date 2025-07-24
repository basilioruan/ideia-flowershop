import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import PageTitle from '@/components/page-title';
import servicosMock, { Servico } from '../servicos/mock/servicos.mock';
import { navigationData } from '@/commons/data/navigation.data';
import styles from './styles.module.css';
import {
  FaArrowLeft,
  FaCheck,
  FaWhatsapp,
  FaPhone,
  FaLeaf,
  FaHeart,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function ServicoDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [servico, setServico] = useState<Servico | null>(null);
  const [loading, setLoading] = useState(true);

  const servicesIcon = navigationData.find(h => h.name === 'SERVIÇOS')?.icon;

  useEffect(() => {
    if (id) {
      const servicoEncontrado = servicosMock.find(s => s.id === parseInt(id as string));
      setServico(servicoEncontrado || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.loading}>
          <FaLeaf className={styles.loadingIcon} />
          <span>Carregando serviço...</span>
        </div>
      </div>
    );
  }

  if (!servico) {
    return (
      <div className={styles.pageContainer}>
        <PageTitle title="Serviço não encontrado" icon={servicesIcon} />
        <div className={styles.notFound}>
          <h2>Serviço não encontrado</h2>
          <p>O serviço que você está procurando não existe ou foi removido.</p>
          <Link href="/servicos" className={styles.backButton}>
            <FaArrowLeft className={styles.backIcon} />
            Voltar para Serviços
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topNav}>
          <Link href="/produtos" className={styles.backLink}>
            <FaArrowLeft />
            <span>Serviços</span>
          </Link>
          <div className={styles.breadcrumb}>
            <span>Serviços</span>
            <span className={styles.separator}>›</span>
            <span className={styles.currentPage}>{servico.nome}</span>
          </div>
        </div>

      {/* Service Hero */}
      <section className={styles.serviceHero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.serviceBadge}>
              <FaCalendarAlt className={styles.badgeIcon} />
              {servico.categoria}
            </div>
            <h1 className={styles.serviceTitle}>{servico.nome}</h1>
            <p className={styles.serviceDescription}>{servico.descricao}</p>
            
            <div className={styles.serviceInfo}>
              <div className={styles.infoItem}>
                <FaClock className={styles.infoIcon} />
                <span>Agendamento necessário</span>
              </div>
              <div className={styles.infoItem}>
                <FaMapMarkerAlt className={styles.infoIcon} />
                <span>Atendemos toda a região</span>
              </div>
              <div className={styles.infoItem}>
                <div className={`${styles.statusDot} ${servico.disponivel ? styles.available : styles.unavailable}`}></div>
                <span>{servico.disponivel ? 'Disponível para agendamento' : 'Temporariamente indisponível'}</span>
              </div>
            </div>
          </div>
          
          <div className={styles.heroRight}>
            <div className={styles.priceCard}>
              <div className={styles.priceLabel}>Investimento</div>
              <div className={styles.priceValue}>{servico.preco}</div>
              <div className={styles.priceNote}>*Valores podem variar conforme personalização e quantidade de itens</div>
              
              <div className={styles.actionButtons}>
                <button className={styles.primaryButton}>
                  <FaWhatsapp className={styles.buttonIcon} />
                  Solicitar Orçamento
                </button>
                <button className={styles.secondaryButton}>
                  <FaPhone className={styles.buttonIcon} />
                  Ligar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className={styles.serviceDetails}>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsHeader}>
            <h2 className={styles.detailsTitle}>
              <FaLeaf className={styles.detailsIcon} />
              O que está incluído neste serviço
            </h2>
            <p className={styles.detailsSubtitle}>
              Cada item foi cuidadosamente selecionado para garantir a perfeição do seu evento
            </p>
          </div>
          
          <div className={styles.detailsList}>
            {servico.detalhes.map((detalhe, index) => (
              <div key={index} className={styles.detailItem}>
                <div className={styles.detailCheck}>
                  <FaCheck className={styles.checkIcon} />
                </div>
                <div className={styles.detailContent}>
                  <h4 className={styles.detailName}>{detalhe}</h4>
                  <p className={styles.detailDescription}>
                    Serviço completo e personalizado de acordo com suas preferências
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>Como funciona nosso processo</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Consulta Inicial</h3>
              <p className={styles.stepDescription}>
                Conversamos sobre suas necessidades, estilo e orçamento para entender sua visão
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Proposta Personalizada</h3>
              <p className={styles.stepDescription}>
                Criamos uma proposta detalhada com sugestões de flores e arranjos específicos
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Execução Perfeita</h3>
              <p className={styles.stepDescription}>
                No dia do evento, nossa equipe cuida de todos os detalhes para garantir a perfeição
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}>
              <FaHeart className={styles.ctaIcon} />
              Pronto para tornar seu evento inesquecível?
            </h3>
            <p className={styles.ctaDescription}>
              Entre em contato conosco agora e vamos criar juntos a decoração perfeita para o seu {servico.categoria.toLowerCase()}
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>
              <FaWhatsapp className={styles.ctaButtonIcon} />
              Solicitar Orçamento via WhatsApp
            </button>
            <button className={styles.ctaSecondary}>
              <FaPhone className={styles.ctaButtonIcon} />
              Ligar Agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
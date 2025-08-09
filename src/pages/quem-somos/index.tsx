import Image from 'next/image';
import PageTitle from '@/components/page-title';
import { navigationData } from '@/commons/data/navigation.data';
import styles from './styles.module.css';
import {
  FaHeart,
  FaLeaf,
  FaUsers,
  FaStar,
  FaHandsHelping,
  FaGlobeAmericas,
  FaAward,
  FaClock,
  FaSmile
} from 'react-icons/fa';

export default function QuemSomos() {
  const aboutIcon = navigationData.find(h => h.name === 'QUEM SOMOS')?.icon;

  return (
    <div className={styles.pageContainer}>
      <PageTitle title="Quem Somos" icon={aboutIcon} />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <FaHeart className={styles.heroIcon} />
              Cultivando momentos especiais há mais de 10 anos
            </h1>
            <p className={styles.heroDescription}>
              Somos uma floricultura familiar que nasceu do amor pelas flores e pela arte de criar momentos únicos. 
              Nossa paixão é transformar ocasiões especiais em memórias inesquecíveis através da beleza natural das flores.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <div className={styles.storyImageContainer}>
            <Image
              src="/assets/altar_decoration.jpg"
              alt="Nossa história"
              fill
              style={{ objectFit: 'cover' }}
              className={styles.storyImage}
            />
          </div>
          <div className={styles.storyContent}>
            <h2 className={styles.storyTitle}>
              <FaLeaf className={styles.storyIcon} />
              Nossa História
            </h2>
            <p className={styles.storyText}>
              Tudo começou em 2013, quando Maria e João decidiram transformar sua paixão pelas flores em um negócio familiar. 
              O que era apenas um hobby se tornou uma missão: levar beleza, amor e alegria para cada lar e evento especial.
            </p>
            <p className={styles.storyText}>
              Ao longo dos anos, crescemos não apenas em tamanho, mas em experiência e dedicação. Cada arranjo que criamos 
              carrega nossa assinatura de carinho e atenção aos detalhes, sempre buscando superar as expectativas de nossos clientes.
            </p>
            <div className={styles.storyStats}>
              <div className={styles.statItem}>
                <FaSmile className={styles.statIcon} />
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Clientes Felizes</span>
              </div>
              <div className={styles.statItem}>
                <FaAward className={styles.statIcon} />
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Eventos Realizados</span>
              </div>
              <div className={styles.statItem}>
                <FaClock className={styles.statIcon} />
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          <h2 className={styles.valuesTitle}>
            <FaStar className={styles.valuesIcon} />
            Nossos Valores
          </h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <FaHeart className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Paixão</h3>
              <p className={styles.valueDescription}>
                Cada arranjo é criado com amor e dedicação, refletindo nossa paixão genuína pelas flores e pela arte floral.
              </p>
            </div>
            <div className={styles.valueCard}>
              <FaLeaf className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Sustentabilidade</h3>
              <p className={styles.valueDescription}>
                Trabalhamos com fornecedores locais e práticas sustentáveis, respeitando o meio ambiente em cada processo.
              </p>
            </div>
            <div className={styles.valueCard}>
              <FaUsers className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Família</h3>
              <p className={styles.valueDescription}>
                Somos uma empresa familiar que trata cada cliente como parte da nossa família, com carinho e atenção especial.
              </p>
            </div>
            <div className={styles.valueCard}>
              <FaHandsHelping className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Qualidade</h3>
              <p className={styles.valueDescription}>
                Selecionamos apenas as melhores flores e materiais, garantindo arranjos duradouros e de alta qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
          <h2 className={styles.teamTitle}>
            <FaUsers className={styles.teamIcon} />
            Nossa Equipe
          </h2>
          <p className={styles.teamDescription}>
            Conheça as pessoas apaixonadas que fazem a magia acontecer todos os dias
          </p>
          
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImageContainer}>
                <Image
                  src="/assets/rose_img.jpg"
                  alt="Maria Silva"
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.memberImage}
                />
              </div>
              <h3 className={styles.memberName}>Maria Silva</h3>
              <p className={styles.memberRole}>Fundadora & Designer Floral</p>
              <p className={styles.memberDescription}>
                Com mais de 15 anos de experiência, Maria é a mente criativa por trás de nossos arranjos mais especiais.
              </p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.memberImageContainer}>
                <Image
                  src="/assets/buque_rosas.jpg"
                  alt="João Santos"
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.memberImage}
                />
              </div>
              <h3 className={styles.memberName}>João Santos</h3>
              <p className={styles.memberRole}>Co-fundador & Especialista em Eventos</p>
              <p className={styles.memberDescription}>
                João cuida da logística e coordenação de eventos, garantindo que tudo saia perfeito no seu dia especial.
              </p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.memberImageContainer}>
                <Image
                  src="/assets/services_img.jpg"
                  alt="Ana Costa"
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.memberImage}
                />
              </div>
              <h3 className={styles.memberName}>Ana Costa</h3>
              <p className={styles.memberRole}>Consultora de Relacionamento</p>
              <p className={styles.memberDescription}>
                Ana é responsável por entender suas necessidades e transformá-las em realidade através de nossos serviços.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className={styles.missionSection}>
        <div className={styles.missionContainer}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <FaHeart className={styles.missionIcon} />
              <h3 className={styles.missionTitle}>Nossa Missão</h3>
              <p className={styles.missionText}>
                Criar experiências únicas e emocionantes através da arte floral, 
                transformando momentos especiais em memórias inesquecíveis para nossos clientes.
              </p>
            </div>
            
            <div className={styles.missionCard}>
              <FaGlobeAmericas className={styles.missionIcon} />
              <h3 className={styles.missionTitle}>Nossa Visão</h3>
              <p className={styles.missionText}>
                Ser reconhecida como a floricultura de referência na região, 
                conhecida pela excelência, criatividade e compromisso com a satisfação do cliente.
              </p>
            </div>
            
            <div className={styles.missionCard}>
              <FaStar className={styles.missionIcon} />
              <h3 className={styles.missionTitle}>Nossos Princípios</h3>
              <p className={styles.missionText}>
                Paixão pelo que fazemos, respeito ao cliente, compromisso com a qualidade, 
                sustentabilidade ambiental e valorização das relações humanas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
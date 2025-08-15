import Image from 'next/image';
import PageTitle from '@/components/page-title';
import { navigationData } from '@/commons/data/navigation.data';
import styles from './styles.module.css';
import {
  FaHeart,
  FaUsers,
  FaHandsHelping,
  FaAward,
  FaClock,
  FaSmile
} from 'react-icons/fa';

export default function QuemSomos() {
  const aboutIcon = navigationData.find(h => h.name === 'QUEM SOMOS')?.icon;

  return (
    <div className={styles.pageContainer}>
      <PageTitle title="Quem Somos" icon={aboutIcon} />
      
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.heroSubtitle}>Desde 2013</span>
            <h2 className={styles.heroTitle}>
              Cultivando momentos especiais há mais de 10 anos
            </h2>
            <p className={styles.heroDescription}>
              Somos uma floricultura familiar que nasceu do amor pelas flores e pela arte de criar momentos únicos. 
              Nossa paixão é transformar ocasiões especiais em memórias inesquecíveis através da beleza natural das flores.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <FaSmile className={styles.statIcon} />
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Clientes Felizes</span>
              </div>
              <div className={styles.statCard}>
                <FaAward className={styles.statIcon} />
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Eventos</span>
              </div>
              <div className={styles.statCard}>
                <FaClock className={styles.statIcon} />
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Anos</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/assets/altar_decoration.jpg"
              alt="Decoração de altar"
              fill
              style={{ objectFit: 'cover' }}
              className={styles.heroImg}
            />
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
              <FaHeart className={styles.storyIcon} />
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
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>O que nos move</span>
            <h2 className={styles.sectionTitle}>Nossos Valores</h2>
            <p className={styles.sectionDescription}>
              Princípios que guiam cada passo da nossa jornada
            </p>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <FaHeart className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueTitle}>Paixão</h3>
              <p className={styles.valueDescription}>
                Cada arranjo é criado com amor e dedicação, refletindo nossa paixão genuína pelas flores e pela arte floral.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <FaUsers className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueTitle}>Família</h3>
              <p className={styles.valueDescription}>
                Somos uma empresa familiar que trata cada cliente como parte da nossa família, com carinho e atenção especial.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <FaHandsHelping className={styles.valueIcon} />
              </div>
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
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Conheça quem faz a diferença</span>
            <h2 className={styles.sectionTitle}>Nossa Equipe</h2>
            <p className={styles.sectionDescription}>
              Pessoas apaixonadas que fazem a magia acontecer todos os dias
            </p>
          </div>
          
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberCard}>
                <div className={styles.memberImageContainer}>
                  <Image
                    src="/assets/rose_img.jpg"
                    alt="Maria Silva"
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>Maria Silva</h3>
                  <p className={styles.memberRole}>Fundadora & Designer Floral</p>
                  <p className={styles.memberDescription}>
                    Com mais de 15 anos de experiência, Maria é a mente criativa por trás de nossos arranjos mais especiais.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.memberCard}>
                <div className={styles.memberImageContainer}>
                  <Image
                    src="/assets/buque_rosas.jpg"
                    alt="João Santos"
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>João Santos</h3>
                  <p className={styles.memberRole}>Co-fundador & Especialista em Eventos</p>
                  <p className={styles.memberDescription}>
                    João cuida da logística e coordenação de eventos, garantindo que tudo saia perfeito no seu dia especial.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.memberCard}>
                <div className={styles.memberImageContainer}>
                  <Image
                    src="/assets/services_img.jpg"
                    alt="Ana Costa"
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>Ana Costa</h3>
                  <p className={styles.memberRole}>Consultora de Relacionamento</p>
                  <p className={styles.memberDescription}>
                    Ana é responsável por entender suas necessidades e transformá-las em realidade através de nossos serviços.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';
import roseImg from '../../public/assets/rose_img.jpg';
import servicesImg from '../../public/assets/services_img.jpg';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <Image src={servicesImg} className={styles.image} alt="Imagem decoração" />
        <div className={`${styles.textContent} ${styles.serviceContent}`}>
          <span className={styles.serviceMainText}>Causando sorrisos e emoções</span>
          <span className={styles.serviceSecondaryText}>Confira nossos serviços</span>
          <Link href="/servicos">
            <button className={styles.serviceBtn}>Serviços</button>
          </Link>
        </div>
      </div>
      
      <div className={styles.container}>
        <Image src={roseImg} className={styles.image} alt="Imagem rosa" />
        <div className={`${styles.textContent} ${styles.productContent}`}>
          <span className={styles.productMainText}>Onde as flores se tornam sentimentos</span>
          <span className={styles.productSecondaryText}>Confira nossos produtos</span>
          <Link href="/produtos">
            <button className={styles.productBtn}>Produtos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

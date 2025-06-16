import Image from 'next/image';
import roseImg from '../../public/assets/rose_img.jpg';
import servicesImg from '../../public/assets/services_img.jpg';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
    <div className={styles.container}>
        <span className={styles.serviceMainText}> Causando sorrisos e emoções </span>
        <span className={styles.serviceSecondaryText}> Confira nossos serviços </span>
        <button className={styles.serviceBtn}> Serviços </button>
        <Image src={servicesImg} className={styles.image} alt="Imagem decoração" />
      </div>
      <div className={styles.container}>
        <span className={styles.productMainText}> Onde as flores se tornam sentimentos </span>
        <span className={styles.productSecondaryText}> Confira nossos produtos </span>
        <button className={styles.productBtn}> Produtos </button>
        <Image src={roseImg} className={styles.image} alt="Imagem rosa" />
      </div>
      
    </>
  );
}
